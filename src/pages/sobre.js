import React from "react"
import { Row, Col, Container } from "reactstrap"
// import { Container } from './styles';

function pages() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} style={{ background: "red" }} className="text-success">
          Hello Word
        </Col>
        <Col sm={12} md={6} style={{ background: "green" }}>
          Jurante
        </Col>
      </Row>
    </Container>
  )
}

export default pages
