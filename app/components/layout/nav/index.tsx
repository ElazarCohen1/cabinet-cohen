"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "@images/logo.png";

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-lg "
          : "bg-transparent"
      }`}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            width={50}
            height={50}
            src={logo.src}
            alt="Cabinet Cohen"
            className="h-20 w-auto d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              { href: "/", label: "Accueil" },
              { href: "/cabinet", label: "Cabinet" },
              { href: "/domaines", label: "Domaines" },
              { href: "/honoraires", label: "Honoraires" },
            ].map((item) => (
              <Nav.Link
                key={item.href}
                as={Link}
                href={item.href}
                className="px-4 text-ivory/90 hover:text-brass transition-colors duration-200 text-sm uppercase tracking-widest"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}