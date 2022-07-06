import React from 'react'
import Navbar from '../component/Navbar/navbar'
import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'
import Brands from '../component/Home/Brands/brands'
import Info from '../component/Home/Info/Info'
import Contact from '../component/Home/Contact/Contact'

function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <Brands/>
        <Info/>
        <Contact/>
        <Footer />
    </>
  )
}

export default Home