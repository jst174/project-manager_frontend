import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href=".">Project manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/employees">Employees</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/clients">Clients</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
