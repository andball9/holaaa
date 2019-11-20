import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,

} from "reactstrap";


function SectionNavbars() {
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <Row>
            <Col md="12">
              <Navbar className="bg-primary" expand="lg">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  PET SHOP
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu"
                  data-toggle="collapse"
                  id="navbar-menu"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu">
                  <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        MASCOTAS
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">

                        </DropdownItem>
                        <DropdownItem
                          href="/perros-page"
                        >
                          PERROS
                        </DropdownItem>
                        <DropdownItem
                          href="/gatos-page"
                        >
                          GATOS
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <NavLink href="/gatos-page" >
                        EMPRESA
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        CLIENTES
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="/perros-page"
                        id="dropdownMenuButton"
                        nav
                        // onClick={e => e.preventDefault()}
                        role="button"
                      >
                        PRODUCTOS
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                        </DropdownItem>
                        <DropdownItem
                          href="/gatos-page"
                        onClick={e => e.preventDefault()}
                        >
                          PERROS
                        </DropdownItem>
                        <DropdownItem

                        >
                          GATOS
                        </DropdownItem>
                        <DropdownItem
                          href="/gatos-page"

                        >
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNavbars;
