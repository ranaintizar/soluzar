import Footer from "components/footer";
import Header from "components/header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soluzar | Agency</title>
        <meta name="description" content="Agency Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Footer />
      </main>
    </>
  );
}
