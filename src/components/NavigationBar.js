import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' to='/about'>О ПРОЕКТЕ</Link>
                    <Link className='nav-link' to='/'>ВЫСКАЗАТЬСЯ</Link>
                    <Link className='nav-link' to='/font-in-se'>ФОНТ ИН ЮЗ</Link>
                    <Link className='nav-link' to='/store'>МАГАЗИН</Link>
                    <Nav.Link href="#link">КОРЗИНА (0)</Nav.Link>
                    <Nav.Link href="#link">ENG</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
