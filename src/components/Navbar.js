import React, { Component, State } from "react";
import "./Navbar.css";
import { MenuItem } from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from './images/logo.png';
import { Link } from "react-router-dom";

class Navbar extends Component
{
    state = {clicked: false};
    handleClick = () =>
    {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavbarItems">
                
                <a href="/">
                    <img className="nev-logo" src={logo} alt="logo" />
                </a>
                
                <div className="menu-icons">
                    <i class={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className="nav-menu">
                    {MenuItem.map((item, index) =>
                    {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <button>BUY TICKET</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;