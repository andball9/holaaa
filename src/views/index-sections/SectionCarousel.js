

import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Container, Row, Col,  
  // CardImgOverlay 
} from 'reactstrap';
const Example = (props) => {
  return (
    <>
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
                    <CardTitle>Desparasitar</CardTitle>
                    <CardSubtitle>Advocate® Perros</CardSubtitle>
                    <CardText>Advocate® de Bayer elimina pulgas y parásitos intestinales en perros y gatos, con tan solo una aplicación tópica. Además previene y trata sarnas y protege contra el mortal gusano del corazón.</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Para que esté sano y fuerte Para</CardTitle>
                    <CardSubtitle>Equilibrium® ActiForte</CardSubtitle>
                    <CardText>Siente la emoción de mantener feliz a tu mascota .</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/tenerlo-limpiecito-gatos.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Para tenerlo limpiecito</CardTitle>
                    <CardSubtitle>Bolfo® Polvo</CardSubtitle>
                    <CardText>Bolfo® Polvo es el talco insecticida con agradable aroma ideal para controlar pulgas, garrapatas y piojos no solo en tu perro y gato, sino también en los lugares que ellos comparten contigo</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte-gatos.jpg")}
                  />
                  <CardBody>
                    <CardTitle>Para que esté sano y fuerte </CardTitle>
                    <CardSubtitle>Equilibrium® Calcium</CardSubtitle>
                    <CardText>Equilibrium Calcium de Bayer es el complemento alimenticio para tu perro y gato que garantiza un embarazo y lactancia saludable.</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                  </Card>


{/*  
    <div>
      <Card inverse>
      <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte-gatos.jpg")}
                  />
        <CardImgOverlay>
          <CardTitle >Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div> */}



                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>

  );
};

export default Example;