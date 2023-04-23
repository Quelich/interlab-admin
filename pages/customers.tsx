// Customer is a System that is being monitored
import { useState } from "react";
import RegisteredSystemsTable from "@/components/registered-systems-table";
import { prisma } from "@/database/db";
import { Grid, Button, Text, Card, Input, Spacer } from "@nextui-org/react";
import { Prisma, Systems } from "@prisma/client";

export async function getServerSideProps() {
  const fetchedSystems: Systems[] = await prisma.systems.findMany();
  return {
    props: {
      initialSystems: fetchedSystems,
    },
  };
}

// Send customer data to API endpoint
async function saveCustomer(customer: Prisma.SystemsCreateInput) {
  if (!customer.hostname || !customer.platform || !customer.arch) {
    //todo: handle error
    return;
  }
  const res = await fetch("/api/v1/customers", {
    method: "POST",
    body: JSON.stringify(customer),
  });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
}

// Render the page
export default function Customers({ initialSystems }: any) {
  const [hostname, setHostname] = useState("");
  const [platform, setPlatform] = useState("");
  const [arch, setArch] = useState("");
  const [systems, setSystems] = useState(initialSystems);
  //TODO: handle incorrect input
  return (
    <>
      <Grid.Container gap={2} justify="center" direction="column">
        <Grid xs={12} md={6}>
          <Card>
            <Card.Header>
              <Text className="text-xl ">Register a System for Monitoring</Text>
            </Card.Header>
            <Card.Body>
              <Input
                type="text"
                bordered
                label="Host name"
                value={hostname}
                onChange={(e) => setHostname(e.target.value)}
              />
              <Input
                type="text"
                bordered
                label="Platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              />
              <Input
                type="text"
                bordered
                label="System Architecture"
                value={arch}
                onChange={(e) => setArch(e.target.value)}
              />
              <Spacer y={0.5} />

              <Button
                onPress={async (e) => {
                  try {
                    const inputData = {
                      hostname,
                      platform,
                      arch,
                    };

                    await saveCustomer(inputData);
                    setHostname("");
                    setPlatform("");
                    setArch("");
                    setSystems([...systems, inputData]);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                color={"gradient"}
                auto
                ghost
              >
                Register
              </Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={15}>
          {" "}
          <Card>
            <Card.Body>
              <RegisteredSystemsTable systems={systems} />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
