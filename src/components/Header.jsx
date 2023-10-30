import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold text-white">
          <i class="fa-solid fa-utensils me-3"></i>
          Food Court
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
