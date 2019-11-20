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
                          onClick={e => e.preventDefault()}
                        >
                          PERROS
                        </DropdownItem>
                        <DropdownItem
                          href="/gatos-page"
                          // onClick={e => e.preventDefault()}
                        >
                          GATOS
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    {/*<NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        MASCOTAS
                      </NavLink>
                    </NavItem> */}
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
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={e => e.preventDefault()}
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
                          // onClick={e => e.preventDefault()}
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
                          {/* Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another separated link */}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>
            {/* <Col md="6">
              <Navbar className="bg-danger" expand="lg">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Icons
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu-icon"
                  data-toggle="collapse"
                  id="navbar-menu-icon"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
                  <Nav className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i aria-hidden={true} className="nc-icon nc-email-85" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-single-02"
                        />
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        nav
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-settings-gear-65"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-danger" right>
                        <DropdownItem header tag="span">
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNavbars;
