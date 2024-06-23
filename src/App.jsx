import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import SupportItem from './components/supportItem/SupportItem'
import Services from './components/services/Services'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Provider from './components/provider/Provider'
import Download from './download/Download'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>

      <Header />

      <Banner />

      <SupportItem />

      <Services />

      <About />

      <Provider />

      <Download />

      <Contact />

      <Footer />

      {/* <div className="test"></div> */}

    </>
  )
}

export default App