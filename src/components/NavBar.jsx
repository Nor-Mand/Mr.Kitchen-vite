import React, { useState, useEffect } from "react";
import logo from "../images/logo-white.png";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 80);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} bg={isScrolled ? "dark" : ""}>
          <Container md>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  height="40"
                  className="d-inline-block align-top"
                  alt="Mr. Kitchen Logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mr. Kitchen
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>

                  <Link to="/recipe" className="nav-link">
                    Recipes
                  </Link>

                  <Link to="/story" className="nav-link">
                    Story
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
