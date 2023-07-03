import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children, title }) => {
  return (
    <div>
        <Head>
            <title>{`ableton - ${title}`}</title>
        </Head>
        <Navbar />
        <main className="container mx-auto mt-20 p-5">{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout