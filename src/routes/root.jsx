import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Root() {
  return (
    <Container fluid="md">
      <Row>
        <Col sm="4"></Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Root;
