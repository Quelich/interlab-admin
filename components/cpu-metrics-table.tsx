import { Container, Table } from "@nextui-org/react";

export default function CPUMetricsTable({ cpuAnalytics, cpuDates }: any) {
  return (
    <>
      <Container fluid>
        <Table>
          <Table.Header>
            <Table.Column> Index </Table.Column>
            <Table.Column> CPU Utilization(%) </Table.Column>
            <Table.Column> Date</Table.Column>
          </Table.Header>

          <Table.Body>
            {cpuAnalytics?.map((cpuData: number, index: number) => {
              return (
                <Table.Row key={cpuData}>
                  <Table.Cell>{index}</Table.Cell>
                  <Table.Cell>{cpuData}</Table.Cell>
                  <Table.Cell>{cpuDates[index]}</Table.Cell>
                </Table.Row>
              );
            }) ?? (
              <Table.Row>
                <Table.Cell> No Data </Table.Cell>
                <Table.Cell> No Data </Table.Cell>
                <Table.Cell> No Data </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
}
