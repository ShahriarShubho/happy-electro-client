import React, { useContext } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand className="text-warning font-weight-bold h1" as={Link} to="/home">HappyElectro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="m-auto">
          <Nav.Link className="font-weight-bold" as={Link} to="/home"> Home</Nav.Link>
          <Nav.Link className="font-weight-bold" as={Link} to="/orders">Order</Nav.Link>
          <Nav.Link className="font-weight-bold" as={Link} to="/admin">Admin</Nav.Link>
          <Nav.Link className="font-weight-bold" as={Link} to="/logIn">LogIn</Nav.Link>
        </Nav>

        <span className="mr-3">{loggedInUser.name}</span>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
        
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;
