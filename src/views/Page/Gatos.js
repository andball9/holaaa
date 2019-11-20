import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeaderGatos from "components/Headers/IndexHeaderGatos.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCardsGatos from "views/index-sections/SectionCardsGatos.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";

function Gatos() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("Gatos");
      return function cleanup() {
        document.body.classList.remove("Gatos");
      };
    });
    return (
      <>
        <IndexNavbar />
        <IndexHeaderGatos />
        <SectionNavbars/>
        <SectionCardsGatos />
        <DemoFooter />
    </>
  );
}

export default Gatos;

