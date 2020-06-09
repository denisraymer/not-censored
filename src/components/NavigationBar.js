import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">о проекте</Nav.Link>
                    <Nav.Link href="#link">материться сюда</Nav.Link>
                    <Nav.Link href="#link">шрифт в использовании</Nav.Link>
                    <Nav.Link href="#link">аутфит с позицией</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
