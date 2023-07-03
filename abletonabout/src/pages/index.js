import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Mini from './components/Mini'
import Hero from './components/Hero'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>abelton</title>
      </Head>
      <Navbar/>
      <Mini/>
      <Hero/>
      <Footer/>
    </>
  )
}
