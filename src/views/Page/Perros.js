import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js"
import IndexHeaderPerros from "components/Headers/IndexHeaderPerros.js"
import DemoFooter from "components/Footers/DemoFooter.js"
import SectionCardsPerros from "views/index-sections/SectionCardsPerros.js"
import SectionNavbars from "views/index-sections/SectionNavbars.js"
// index sections

function Perros() {
    document.documentElement.classList.remove("nav-open")
    React.useEffect(() => {
      document.body.classList.add("Perros")
      return function cleanup() {
        document.body.classList.remove("Perros")
      }
    })
    return (
      <>
        <IndexNavbar />
        <IndexHeaderPerros />
        <SectionNavbars/>
        <SectionCardsPerros/>
        <DemoFooter/>
    </>
  )
}

export default Perros;

