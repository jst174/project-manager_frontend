import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to=".">
          Project manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/employees">
              Employees
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/clients">
              Clients
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
