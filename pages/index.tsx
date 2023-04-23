import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        INTERLAB by{"  "}
        <Link
          className="text-3xl font-bold underline"
          href="https://intersys.com.tr/"
        >
          Intersys Teknoloji
        </Link>
      </h1>
      
      <Head>
        <title>Interlab</title>
        <meta name="description" content="Monitor IT infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <div></div>
    </>
  );
}
