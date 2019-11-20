import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardTitle,
  Table
} from "reactstrap";

// core components
import PanelHeader from "../components/PanelHeader/PanelHeader.jsx";
import { thead, tbody } from "../variables/Empleados";
const ModalExample = (props) => {
  const {
    // buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);

  const toggle = () => setModal(!modal);

  // const changeBackdrop = e => {
  //   let value = e.target.value;
  //   if (value !== 'static') {
  //     value = JSON.parse(value);
  //   }
  //   setBackdrop(value);
  // }



  const Opcionescogida = e => {
    let value = e.target.value;
    if (value === 'true') {
      toggle()
    }
    else if (value === 'false') {
      alert('gracias')
    }

  }

  const reiniciar = e => {
    toggle()
  }

  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Empleados</h2>
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
                <h5 className="title">Empleados</h5>
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
                        <label>Cargo</label>
                        <Input
                          defaultValue=""
                          placeholder="Cargo"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="5">
                      <FormGroup>
                        <label>Clave</label>
                        <Input
                          defaultValue=""
                          placeholder="Clave"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <Label for="backdrop">¿Licencia de conduccion?</Label>{' '}
                        <Input type="select" name="backdrop" id="backdrop" onChange={Opcionescogida}>
                          <option value="nada">escojer opcion</option>
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>



{/* -----------------------------modal-------------------------- */}
                  <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop}>
                    <ModalHeader toggle={toggle}>Registrar ¿Licencia</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <label>Número</label>
                        <Input
                          defaultValue=""
                          placeholder="Número"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Fecha de vencimiento</label>
                        <Input
                          defaultValue=""
                          placeholder="Fecha de vencimiento"
                          type="date"
                        />
                      </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                      <Button color="success" onClick={toggle}>Guardar</Button>{' '}
                      <Button color="danger" onClick={reiniciar}>Cancelar</Button>
                    </ModalFooter>
                  </Modal>
{/* ------------------------------------------------------------------------------ */}



                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Estudios</label>
                        <Input
                          cols="80"
                          defaultValue=""
                          placeholder=""
                          rows="4"
                          type="textarea"
                        />
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
                    <h5 className="title">Modulo de Empleados</h5>
                  </a>
                </div>
                <p className="description text-center">
                  En este modulo se efectua el registro de los nuevos clentes y <br />
                  La actualización de los mismos.
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




          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tabla Empleados</CardTitle>
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

export default ModalExample;