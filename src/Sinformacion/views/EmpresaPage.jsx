import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  CardTitle,
  Table
} from "reactstrap";

// core components
import PanelHeader from "../components/PanelHeader/PanelHeader.jsx";
import { thead, tbody } from "../variables/Empresa";

class User extends React.Component {
  render() {
    return (
      <>
      <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Empresa</h2>
              <p className="category">
                Por favor llenar todos y cada uno de los campos.
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Editar Empresa</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            defaultValue=""
                            placeholder="Nombre"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Telefono</label>
                          <Input
                            defaultValue=""
                            placeholder="Telefono"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="">
                            Email 
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("../assets/img/bg5.png")} />
                </div>
                <CardBody>
                  <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <h5 className="title">Modulo de Empresa</h5>
                    </a>
                  </div>
                  <p className="description text-center">
                   En este modulo se efectua el registro de las nuevas empresa y <br/>
                   La actualización de los mismas.
                  </p>
                </CardBody>
                <hr />
                <div className="button-container">
                  <Button

                    className="btn btn-info btn-round btn-block w-75 mx-auto"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >registrar  <i className="now-ui-icons ui-1_simple-add"></i>

                  </Button>
                  <Button
                    className="btn btn-dark btn-round w-25 btn-block w-75 mx-auto"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >actualizar <i className="now-ui-icons ui-2_settings-90"></i>
                  </Button>
                  <Button
                    className="btn btn-danger btn-round w-25 btn-block w-75 mx-auto"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >inactivar  <i className="now-ui-icons ui-1_simple-delete"></i>
                  </Button>
                </div>
              </Card>
            </Col>
          {/* </Row>
        </div> */}
      


{/*  -----------------------tabla------------ */}



              
                  <Col xs={12}>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Simple Table</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead className="text-primary">
                            <tr>
                              {thead.map((prop, key) => {
                                if (key === thead.length - 1)
                                  return (
                                    <th key={key} className="text-right">
                                      {prop}
                                    </th>
                                  );
                                return <th key={key}>{prop}</th>;
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {tbody.map((prop, key) => {
                              return (
                                <tr key={key}>
                                  {prop.data.map((prop, key) => {
                                    if (key === thead.length - 1)
                                      return (
                                        <td key={key} className="text-right">
                                          {prop}
                                        </td>
                                      );
                                    return <td key={key}>{prop}</td>;
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </>
          );
        }
      }

export default User;
