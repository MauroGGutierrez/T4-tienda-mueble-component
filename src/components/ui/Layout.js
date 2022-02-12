import React from "react"
import AboutUs from "./AboutUs"
import Footer from "./Footer/Footer"
import Header from "./Header"
import "./Layout.css"
import MainProducts from "./Products/ProductsCard"
import Section from "./SectionCategory/Sections"


const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Section />
      <AboutUs/>
      <MainProducts/>
      <Footer/>
    </div>
  )
}

export default Layout;