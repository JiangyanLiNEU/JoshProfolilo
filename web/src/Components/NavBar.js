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
                {/* <Nav.Link href='/JoshProfolilo/#Teaching#Teaching' >Teaching</Nav.Link> */}
                <NavDropdown title="Math/CS" id="basic-nav-dropdown">
                  <NavDropdown.Item id='dropItem' href="/JoshProfolilo/#Math#Math">Math Research</NavDropdown.Item>
                  <NavDropdown.Item id='dropItem' href="/JoshProfolilo/#CS#CS">Experience</NavDropdown.Item>
                  <NavDropdown.Item id='dropItem' href="/JoshProfolilo/#Teaching#Teaching">Teaching</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item id='dropItem' href="https://www.linkedin.com/in/joshua-kazdan-16ba49201/" target="_blank">My Linkedin</NavDropdown.Item>
                  <NavDropdown.Item id='dropItem' href="https://drive.google.com/file/d/1g3ZkbDpH9Zg0izXhAWS8CNxW3ohr2BjA/view?usp=sharing" target="_blank">My CV</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/JoshProfolilo/#Hobbies#Hobbies' >Hobbies</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          
        <br/></div>
    );
};