import React,{ Component } from 'react';
import './Navigation.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from "react-router-dom";

class Navigation extends Component {

  render() {
    return(
      <div className="w-100">
        <Navbar tag="div" light expand="md">
          <NavbarBrand tag="div">
            <Link className="link-home" to="/">Chipset Builder</Link>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;