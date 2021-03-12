import React from 'react';
import './Header.css';
import Logo from '../../Assets/burger.png';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                background: "#D70f64",
                Height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"> <img src={Logo} alt="logo" width="100px" /></NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
