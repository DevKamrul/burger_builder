import React from 'react';
import './Header.css';
import Logo from '../../Assets/burger.png';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,

    }
}

const Header = (props) => {
    let links = null;
    if (props.token === null) {
        links = (<Nav className="mr-md-5">
            <NavItem>
                <NavLink exact to="/login" className="NavLink">login</NavLink>
            </NavItem>
        </Nav>
        )
    }
    else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/" className="NavLink">BurgerBuilder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                </NavItem>
            </Nav>
        )
    }
    return (
        <div className="Navigation">
            <Navbar style={{
                background: "#D70f64",
                Height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"> <img src={Logo} alt="logo" width="100px" /></NavbarBrand>
                {links}
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);

