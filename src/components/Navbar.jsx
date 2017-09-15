import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Row } from 'reactstrap';

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        
        return (
            <div>
                <Navbar className="dark-navbar-modified" fixed="top" color="faded" light>
                    <Row>
                        <NavLink className="back-button-modified" href="">
                            <img className="back-button-image-modified" src="/assets/Back.png" />
                        </NavLink>
                        <NavbarBrand className="navbar-brand-modified" href="/">Romantic Comedy</NavbarBrand>
                        <NavLink className="back-button-modified" href="">
                            <img className="back-button-image-modified" src="/assets/search.png" />
                        </NavLink>
                    </Row>
                </Navbar>
            </div>
        )
    }
}