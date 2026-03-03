"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "@images/logo.png";

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`z-10 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/50 backdrop-blur-none"
      }`}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          <img
            src={logo.src}
            alt="Cabinet Cohen"
            className="h-12 w-auto d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/" className="px-3">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} href="/cabinet" className="border-start px-3">
              Cabinet
            </Nav.Link>
            <Nav.Link as={Link} href="/domaines" className="border-start px-3">
              Domaines
            </Nav.Link>
            <Nav.Link as={Link} href="/honoraires" className="border-start px-3">
              Honoraires
            </Nav.Link>
            {/* <Nav.Link as={Link} href="/contact" className="border-start px-3">
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
