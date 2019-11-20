// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

// // core components

// function SectionLogin() {
//   return (
//     <>
//       <div
//         className="section section-image section-login"
//         style={{
//           backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
//         }}
//       >
//         <Container>
//           <Row>
//             <Col className="mx-auto" lg="4" md="">
//               <Card className="card-register">
//                 <h3 className="title mx-auto">Welcome</h3>
//                 <div className="social-line text-center">
//                   <Button
//                     className="btn-neutral btn-just-icon mt-0 ml-1"
//                     color="facebook"
//                     href="#pablo"
//                     onClick={e => e.preventDefault()}
//                   >
//                     <i className="fa fa-facebook-square" />
//                   </Button>
//                   <Button
//                     className="btn-neutral btn-just-icon mt-0 ml-1"
//                     color="google"
//                     href="#pablo"
//                     onClick={e => e.preventDefault()}
//                   >
//                     <i className="fa fa-google-plus" />
//                   </Button>
//                   <Button
//                     className="btn-neutral btn-just-icon mt-0 ml-1"
//                     color="twitter"
//                     href="#pablo"
//                     onClick={e => e.preventDefault()}
//                   >
//                     <i className="fa fa-twitter" />
//                   </Button>
//                 </div>
//                 <Form className="register-form">
//                   <label>Email</label>
//                   <InputGroup className="form-group-no-border">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="nc-icon nc-email-85" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Email" type="email" />
//                   </InputGroup>
//                   <label>Password</label>
//                   <InputGroup className="form-group-no-border">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="nc-icon nc-key-25" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Password" type="password" />
//                   </InputGroup>
//                   <Button
//                     block
//                     className="btn-round"
//                     outline
//                     color="danger"
//                     size="lg"
//                     target="_blank"
//                   >
//                     iniciar sesión
//                   </Button>
//                 </Form>
//                 <div className="forgot">
//                   <Button
//                     className="btn-link"
//                     color="danger"
//                     href="#pablo"
//                     onClick={e => e.preventDefault()}
//                   >
//                     Forgot password?
//                   </Button>
//                 </div>
//               </Card>
//               <div className="col text-center">
//               <Button
//                     block
//                     className="btn-round"
//                     href="/register-page"
//                     color="danger"
//                     size="lg"
//                     target="_blank"
//                   >
//                     Registro
//                   </Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>{" "}
//       <div className="footer register-footer text-center">
//         <h6>
//           © {new Date().getFullYear()}, made with{" "}
//           <i className="fa fa-heart heart" />
//         </h6>
//       </div>
//     </>
//   );
// }

// export default SectionLogin;


import React from "react";

// reactstrap components
 import {
   Button,
   Card,
   Form,
   Input,
   InputGroupAddon,
   InputGroupText,
   InputGroup,
   Container,
   Row,
   Col
 } from "reactstrap";

// core components


function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto " lg="4">
              <Card className="card-register ml-auto mr-auto"
                      style={{
                        backgroundColor: "#ffcb30c2"
                      }}
              >
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center ">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form ">
                   <label>Email</label>
                   <InputGroup className="form-group-no-border">
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="nc-icon nc-email-85" />
                       </InputGroupText>
                     </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                   </InputGroup>
                   <label>Password</label>
                   <InputGroup className="form-group-no-border">
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="nc-icon nc-key-25" />
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input placeholder="Password" type="password" />
                   </InputGroup>
                  <Button block className="btn-round" color="danger" target="_blank"> iniciar sessión </Button>
                  <Button block className="btn-round" href="/register-page" color="danger" > Register </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
                <a href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010">
Descargar Archivo
</a>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> 
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

