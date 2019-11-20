import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Example = (props) => {
  return (


    
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="6" >
          <Card body style={{
                        backgroundColor: "#ffcb30c2"
                      }}>
            <CardTitle> <h2> Animales en la tercera edad: Entérate cómo cuidarlos.</h2>
            </CardTitle>
            <CardText>Si una mascota es bien alimentada desde las etapas tempranas de su vida, es vacunada rigurosamente, es castrada y se mantiene alejada de factores de riesgo como la calle, tiene más esperanza de vida.</CardText>
            <img
              alt="..."
              className="img-thumbnail img-responsive"
              src={require("assets/img/LAPERRERA/Perro-mestizo-cuidados.jpg")}
              style={{
                backgroundColor: "#ffcb30c2"
              }}/>
            <Button>leer más</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body style={{
                        backgroundColor: "#ffcb30c2"
                      }}>
            <CardTitle><h1>Experto revela cómo ven los gatos a los humanos. </h1> </CardTitle>
            <CardText style={{fontSize: "17px"}}>Hay muchas cosas que no sabemos sobre los felinos, incluido lo que piensan de sus dueños. </CardText>
            <img
              alt="..."
              className="img-thumbnail img-responsive"
              src={require("assets/img/LAPERRERA/Gatos-que-sonrien.jpg")}
              style={{
                backgroundColor: "#ffcb30c2"
              }}
              
            />
            <Button>leer más</Button>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto" md="6" >
          <Card body style={{
                        backgroundColor: "#ffcb30c2"
                      }}>
            <CardTitle style={{fontSize: "45px"}}>¿Sabías que los gatos también se pueden entrenar?</CardTitle>
            <CardText style={{fontSize: "18px"}}>Sigue los consejos de un especialista para educar a tu felino.</CardText>
            <img
              alt="..."
              className="img-thumbnail img-responsive"
              src={require("assets/img/LAPERRERA/Gatos-cuidados-especiales.jpg")}
              style={{
                backgroundColor: "#ffcb30c2"
              }}            />
            <Button>leer más</Button>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto" md="6" >
          <Card body style={{
                        backgroundColor: "#ffcb30c2"
                      }}>
            <CardTitle style={{fontSize: "47px"}}>¿Sabías que los perros también sueñan?</CardTitle>
            <CardText>Según un especialista compartimos estos patrones con nuestras mascotas e incluso probablemente tengan pesadillas.</CardText>
            <img
              alt="..."
              className="img-thumbnail img-responsive"
              src={require("assets/img/LAPERRERA/Foto-Bulldog-Frenchie-durmiendo-como-ninio.jpg")}
              style={{
                backgroundColor: "#ffcb30c2"
              }} />
            <Button>leer más</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;