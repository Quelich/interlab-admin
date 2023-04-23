import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/layout";
import theme from "@/data/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </>
  );
}
