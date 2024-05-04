import { Component } from "react";
import "./Navbar.css";
import { MenuItem } from "./MenuItem";

class Navbar extends Component
{
    render(){
        return (
            <nav className="NavbarItems">
                <button className="navbar-logo">Eventre</button>
                <ul className="nav-menu">
                    {MenuItem.map((item, index) =>
                    {
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/">
                                    {item.title}
                                </a>
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