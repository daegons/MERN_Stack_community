import React from 'react';
import { Link } from 'react-router-dom';
//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Heading = () => {
  const font = { fontFamily: "'Yeon Sung', cursive" };
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={font}>
          커뮤니티
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: "'Yeon Sung', cursive",
                marginRight: '10px',
              }}
            >
              home
            </Link>
            <Link
              to="/upload"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginRight: '10px',
              }}
            >
              upload
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginRight: '10px',
              }}
            >
              list
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
