import { Container, Table, Text, Button } from "@nextui-org/react";
import Link from "next/link";

export default function RegisteredSystemsTable({ systems }: any) {

  
  return (
    <>
      <Container fluid>
        <Text className="text-xl "> Registered Systems </Text>
        <Table>
          <Table.Header>
            <Table.Column> Index </Table.Column>
            <Table.Column> Hostname </Table.Column>
            <Table.Column> Platform </Table.Column>
            <Table.Column> Architecture </Table.Column>
            <Table.Column> Link </Table.Column>
          </Table.Header>
          <Table.Body>
            {systems?.map((system: any, index: number) => {
              var hostname = system.hostname;
              var platform = system.platform;
              var arch = system.arch;

              if (hostname === undefined) {
                hostname = "N/A";
              }
              if (platform === undefined) {
                platform = "N/A";
              }
              if (arch === undefined) {
                arch = "N/A";
              }

              return (
                <Table.Row key={index}>
                  <Table.Cell> {index + 1} </Table.Cell>
                  <Table.Cell> {hostname} </Table.Cell>
                  <Table.Cell> {platform} </Table.Cell>
                  <Table.Cell> {arch} </Table.Cell>
                  <Table.Cell>
                    <Link href={`/system/${encodeURIComponent(hostname)}`}>
                      Visit
                    </Link>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
}
