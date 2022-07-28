import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import logo from '../../assets/logo192.png';

export default function Header() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img width="40" src={logo} alt="First" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="/">Home</Nav.Link>
                        <Nav.Link className="text-white" href="/listing">Listing</Nav.Link>
                        <NavDropdown title={<span className="text-white my-auto">Dropdown</span>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dynamic">Pagination</NavDropdown.Item>
                            <NavDropdown.Item href="/form">Simple Form</NavDropdown.Item>
                            <NavDropdown.Item href="/dynamicForm">dynamicForm</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}