import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link, Route, Routes } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Bar() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">   
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/myproduct">MyProducts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet/>
      </div>
    )
  }