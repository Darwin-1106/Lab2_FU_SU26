import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.jpg";
import { FaCartShopping } from "react-icons/fa6";

function Header({ cartCount }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fuild>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          SHOP FASHION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <Nav.Link href="#action3">Men</Nav.Link>
            <Nav.Link href="#action4">Women</Nav.Link>
            <Nav.Link href="#action5">Contact</Nav.Link>
          </Nav>
          <span className="ms-3" style={{ cursor: "pointer", fontWeight: "600" }}>
            <FaCartShopping /> ({cartCount})
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
