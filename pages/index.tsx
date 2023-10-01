import React, { useEffect } from 'react'
import Head from 'next/head'

import CTA from 'components/cta'
import FeaturesSection from 'components/features-section'
import Footer from 'components/footer'
import Header from 'components/header'
import Modal from 'components/modal'
import HeroSection from 'components/hero-section'
import Intro from 'components/intro-section'
import PlansSection from 'components/plans-section'

import Img from 'assets/image-3.png'

import stl from './home.module.scss'

export default function Home() {
  const [showDialogue, setShowDialogue] = React.useState(false)
  const [theme, setTheme] = React.useState('light')
  const [data, setData] = React.useState({
    variant: 'success',
    email: 'admin@yourdomain.com',
  })

  let isDarkMode = false

  if (typeof window !== 'undefined') {
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  useEffect(() => {
    isDarkMode ? setTheme('dark') : setTheme('light')
  }, [isDarkMode])

  return (
    <>
      <Head>
        <title>Soluzar | Agency</title>
        <meta name="description" content="Agency Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={stl[`${theme}Main`]}>
        {showDialogue ? (
          <Modal
            theme={theme}
            visible={showDialogue}
            setIsVisible={setShowDialogue}
            data={data}
          />
        ) : undefined}
        <Header theme={theme} />
        <Intro />
        <FeaturesSection theme={theme} />
        <div id="about" className={stl.section}>
          <HeroSection />
          <HeroSection
            src={Img}
            swap={true}
            heading="You can practice any time convenient for you"
          />
        </div>
        <PlansSection theme={theme} />
        <CTA />
        <Footer
          setShowDailogue={setShowDialogue}
          setData={setData}
          theme={theme}
        />
      </main>
    </>
  )
}
