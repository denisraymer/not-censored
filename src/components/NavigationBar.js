import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className='nav-link'
                             to='/about'
                             activeClassName='nav-link-active'>О ПРОЕКТЕ</NavLink>
                    <NavLink className='nav-link'
                             exact
                             to='/'
                             activeClassName='nav-link-active'>ВЫСКАЗАТЬСЯ</NavLink>
                    <NavLink className='nav-link'
                             to='/font-in-se'
                             activeClassName='nav-link-active'>ФОНТ ИН ЮЗ</NavLink>
                    <NavLink className='nav-link'
                             to='/store'
                             activeClassName='nav-link-active'>МАГАЗИН</NavLink>
                    <Nav.Link href="/">КОРЗИНА (0)</Nav.Link>
                    <Nav.Link href="/">ENG</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
