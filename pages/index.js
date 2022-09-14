import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Signup from '../components/Signup'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Flixia</title>
      </Head>

      <Nav />
      <Hero />
      <Main />
      <Signup />
      <Footer />

     
    </div>
  )
}
