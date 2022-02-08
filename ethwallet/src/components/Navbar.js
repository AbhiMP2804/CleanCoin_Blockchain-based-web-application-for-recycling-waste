// import React,{useState} from "react"
// import Transz from "../Transaction"
import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/CleanCoin.png';
import "./App.css"

const NavbarComponent = () => {

    return (
            <Navbar className="nav" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                            alt="CleanCoin Logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/home">
                            <Nav.Link className="ml-3 mr-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="ml-3 mr-3">Our Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="ml-3 mr-3">Get In Touch</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Login">
                        <Button type="submit">Login</Button>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}
 
export default NavbarComponent;

