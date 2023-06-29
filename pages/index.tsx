import Head from "next/head";

import CTA from "components/cta";
import FeaturesSection from "components/features-section";
import Footer from "components/footer";
import Header from "components/header";
import HeroSection from "components/hero-section";
import Intro from "components/intro-section";
import PlansSection from "components/plans-section";

import stl from "./home.module.scss";

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
        <Intro />
        <FeaturesSection />
        <div id="about" className={stl.section}>
          <HeroSection />
          <HeroSection
            swap={true}
            heading="You can practice any time convenient for you"
          />
        </div>
        <PlansSection />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
