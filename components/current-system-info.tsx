import { Container, Text } from "@nextui-org/react";

export default function CurrentSystemInfo({ cpuMetrics }: any) {
  return (
    <>
      <Container fluid>
        <Text> Current System Information </Text>
        <Text> Platform: {cpuMetrics?.platform} </Text>
        <Text> Architecture: {cpuMetrics?.arch} </Text>
        <Text>
          {" "}
          Total Available Memory: {toGigaBytes(cpuMetrics?.totalmem)}{" "}
        </Text>
        <Text> Free Memory: {toGigaBytes(cpuMetrics?.freemem)} </Text>
        <Text> Hostname: {cpuMetrics?.hostname} </Text>
      </Container>
    </>
  );
}

/* HELPERS  */
// Convert bytes to gigabytes
function toGigaBytes(bytes: number) {
  return Math.fround(bytes / Math.pow(1024, 3));
}
