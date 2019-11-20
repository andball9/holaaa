
import React from "react";

// reactstrap components
import { Container, Row,} from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <div id="typography">
          <Row>
            <div className="mx-auto" >
              <h1>
                <span className="note"></span>
                Noticias
              </h1>
            </div>
          </Row>
        </div> 
        <br />
      </Container>
    </>
  );
}

export default SectionTypography;
