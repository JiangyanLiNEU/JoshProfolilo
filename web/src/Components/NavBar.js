import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
export const NavBar = () => {
    const font_style = {fontStyle: "cursor"};
    return (
        <Navbar position='sticky' bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><h1 style={font_style}>Joshua Kazdan</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Teaching</Nav.Link>
        <NavDropdown title="Math/CS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Math Research</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">CS Experience</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Hobbies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.linkedin.com/in/joshua-kazdan-16ba49201/" target="_blank">My Linkedin</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};