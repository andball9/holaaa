

import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
const Example = (props) => {
  return (

    <>


    <Container className="tim-container">
    <div id="typography">
      <Row>
        <div className="mx-auto" >
          <h1>
         Ofertas
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
                    src={require("assets/img/LAPERRERA/5aafa4c4c7e80b6502a187b8-large.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Comedero para perros </CardTitle>
                    {/* <CardSubtitle>Fantástico comedero para perros y gatos con base de silicona antideslizante, hecho de melanina y con bol de acero inoxidable, perfecto para que tu mascota coma de la forma más fácil y rápida.</CardSubtitle> */}
                    <CardText> precio $: 25.000</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/4070_1_familia-raton-con-muelle.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Juguete para gatos familia ratón con muelle</CardTitle>
                    {/* <CardText>Divertido juguete para gatos con 3 ratoncitos a diferentes alturas, con un muelle cada uno de ellos que hará que se muevan en múltiples direcciones, haciendo las delicias de su gato .</CardText> */}
                    <CardSubtitle>precio $:40.000</CardSubtitle>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/8003507971028_1_transportin-gulliver-puerta-plastico.jpg")}
                  />
                  <CardBody>
                    <CardTitle>transportin gulliver puerta plastico</CardTitle>
                    <CardSubtitle>precio $:90.000</CardSubtitle>
                    {/* <CardText>Bolfo® Polvo es el talco insecticida con agradable aroma ideal para controlar pulgas, garrapatas y piojos no solo en tu perro y gato, sino también en los lugares que ellos comparten contigo</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/002_1_rascador-poste-sisal-negro.jpg")}
                  />
                  <CardBody>
                    <CardTitle> rascador poste sisal cuerda negro  </CardTitle>
                    <CardSubtitle>precio $:54.000</CardSubtitle>
                    {/* <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/235203_1_funky-dog-pino.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Ambientador para coche con ventosa</CardTitle>
                    <CardSubtitle>precio $:12.000</CardSubtitle>
                    {/* <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText> */}
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>

                </CardGroup>
            </Col>


            <Col className="ml-auto mr-auto" md="12">
              <CardGroup>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>

  );
};

export default Example;