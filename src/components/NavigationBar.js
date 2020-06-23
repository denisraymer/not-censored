import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">О ПРОЕКТЕ</Nav.Link>
                    <Nav.Link href="#link">ВЫСКАЗАТЬСЯ</Nav.Link>
                    <Nav.Link href="#link">ФОНТ ИН ЮЗ</Nav.Link>
                    <Nav.Link href="#link">МАГАЗИН</Nav.Link>
                    <Nav.Link href="#link">КОРЗИНА (0)</Nav.Link>
                    <Nav.Link href="#link">ENG</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
