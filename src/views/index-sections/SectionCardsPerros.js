

import React from 'react';
import {
  Card, Button, CardTitle, CardGroup,
   CardBody, Container, Row, Col
} from 'reactstrap';
const Example = (props) => {
  return (
    <>

<Container className="tim-container">
    <div id="typography">
      <Row>
        <div className="mx-auto" >
          <h1>
         Productos para
        </h1>
        </div>
      </Row>
    </div>
  </Container>



      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <CardGroup>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/pulgas-garrapatas.jpg")}
                  />
                  <CardBody>
                    <CardTitle><h3> Desparasitar</h3></CardTitle>

                    {/* <CardSubtitle>Advocate® Perros</CardSubtitle> */}
                    {/* <CardText>Advocate® de Bayer elimina pulgas y parásitos intestinales en perros y gatos, con tan solo una aplicación tópica. Además previene y trata sarnas y protege contra el mortal gusano del corazón.</CardText> */}
                    <Button className="mt-5">Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte.jpg")}
                  />
                  
                  <CardBody>
                  <CardTitle><h3>para que este sano y fuerte</h3></CardTitle>
                    {/* <CardSubtitle>Bolfo® Polvo</CardSubtitle> */}
                    {/* <CardText>Bolfo® Polvo es el talco insecticida con agradable aroma ideal para controlar pulgas, garrapatas y piojos no solo en tu perro y gato, sino también en los lugares que ellos comparten contigo</CardText> */}
                    <Button className="mt-3">Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/tenerlo-limpiecito.jpg")}
                  />
                  <CardBody>
                    <CardTitle><h3> para tenerlo limpiecito</h3> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle> */}
                    {/* <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button >Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/lombrices-parasitos.jpg")}
                  />
                  <CardBody>
                    <CardTitle><h3>para pulgas</h3></CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle> */}
                    {/* <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>

                </CardGroup>
            </Col>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
           
           
           
           
<Container className="tim-container">
    <div id="typography">
      <Row>
        <div className="mx-auto" >
          <h1>
        A tener en cuenta
        </h1>
        </div>
      </Row>
    </div>
  </Container>

           
           
           
            <Col className="ml-auto mr-auto" md="12">
              <CardGroup>

              <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/descarga.jpg")}
                  />
                  <CardBody>
                    <CardTitle> <h2>Cuidados del perro</h2> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
              <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/descarga (1).jpg")}
                  />
                  <CardBody>
                  <CardTitle> <h2>Consejos de salud </h2> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>

                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/descarga (2).jpg")}
                  />
                  <CardBody>
                     <CardTitle> <h2> Razas perrunas</h2> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/descarga (3).jpg")}
                  />
                  <CardBody>
                     <CardTitle> <h4>Enfermedades frecuentes</h4> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/descarga (5).jpg")}
                  />
                  <CardBody>
                     <CardTitle> <h3>Alimentación</h3> </CardTitle>
                    {/* <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
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