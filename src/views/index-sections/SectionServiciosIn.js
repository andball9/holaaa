

import React from 'react';
import {
  Card, CardTitle, CardGroup, Container, Row, Col,
  CardImgOverlay
} from 'reactstrap';
const Example = (props) => {
  return (
    <>
      <div className="">



        <Container className="tim-container">
          <div id="typography">
            <Row>
              <div className="mx-auto" >
                <h1>
                  Servicios 
              </h1>
              </div>
            </Row>
          </div>
        </Container>


        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <CardGroup>

                <Card>
                  <div>
                    <Card inverse>
                      <img
                        alt="..."
                        className="img-thumbnail img-responsive"
                        src={require("assets/img/LAPERRERA/veterinarias.jpg")}
                      />
                      <CardImgOverlay>
                        <CardTitle><h1 style={{color: "white"}}>Veterinaria</h1></CardTitle>
                      </CardImgOverlay>
                    </Card>
                  </div>
                </Card>

                <Card>
                  <div>
                    <Card inverse>
                      <img
                        alt="..."
                        className="img-thumbnail img-responsive"
                        src={require("assets/img/LAPERRERA/pet-shops.jpg")}
                      />
                      <CardImgOverlay>
                        <CardTitle> <h1 style={{color: "white"}}>Pet Shop</h1></CardTitle>

                      </CardImgOverlay>
                    </Card>
                  </div>
                </Card>

                <Card>
                  <div>
                    <Card inverse>
                      <img
                        alt="..."
                        className="img-thumbnail img-responsive"
                        src={require("assets/img/LAPERRERA/peluqueria-canina-1.jpg")}
                        style={{height:150}}
                      />
                      <CardImgOverlay>
                        <CardTitle> <h1 style={{color: "white"}}>Peluqueria</h1></CardTitle>
                      </CardImgOverlay>
                    </Card>
                  </div>
                </Card>
              </CardGroup>
            </Col>
            
          </Row>
        </Container>
      </div>{" "}
    </>

  );
};

export default Example;