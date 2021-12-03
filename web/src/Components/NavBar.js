import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    // const font_style = {fontStyle: "cursor",}
    return (
      <div><br/>
        <Navbar position='sticky' bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/JoshProfolilo"><h1 id='name'>Joshua Kazdan</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href='/JoshProfolilo'>home</Nav.Link>
                <Nav.Link href='/JoshProfolilo/#Teaching#Teaching' >Teaching</Nav.Link>
                <NavDropdown title="Math/CS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/JoshProfolilo/#Math#Math">Math Research</NavDropdown.Item>
                  <NavDropdown.Item href="/JoshProfolilo/#CS#CS">CS Experience</NavDropdown.Item>
                  <NavDropdown.Item href="/JoshProfolilo/#Hobbies#Hobbies">Hobbies</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.linkedin.com/in/joshua-kazdan-16ba49201/" target="_blank">My Linkedin</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          
        <br/></div>
    );
};