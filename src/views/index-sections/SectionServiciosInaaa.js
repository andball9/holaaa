import React from 'react';

import {
  Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Row,
  Col, CardGroup

} from 'reactstrap';

const Example = (props) => {
  return (
    
      <Container>
        <div className="title">
            <h2>nuestros servicios</h2>
          </div>
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <CardGroup>
              <Card>
                <Card inverse>
                <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte-gatos.jpg")}
                  />
                  <CardImg/>
                  <CardImgOverlay>
                    <CardTitle style={{color: "white"}}><h1>veterinarias</h1></CardTitle>
                    <CardText style={{color: "white"}} > This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Card>
            </CardGroup>
            <Card>
                <Card inverse>
                <img
                    alt="..."
                    className="img-thumbnail img-responsive"
                    src={require("assets/img/LAPERRERA/crezca-sano-fuerte-gatos.jpg")}
                  />
                  <CardImg/>
                  <CardImgOverlay>
                    <CardTitle style={{color: "white"}}><h1>veterinarias</h1></CardTitle>
                    <CardText style={{color: "white"}} > This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Card>
          </Col>
        </Row>
      </Container >
  );
};

export default Example;