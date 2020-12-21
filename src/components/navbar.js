import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import M from "materialize-css/dist/js/materialize";

class Navbar extends React.Component {
  // this ensures the dropdown and sidenave works
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".sidenav");
            var dro = document.querySelectorAll(".dropdown-trigger");
            var ans = M.Dropdown.init(dro, {
                hover: true,
                coverTrigger: false,
                constrainWidth: false,
            });
            var instances = M.Sidenav.init(elems, { edge: "right" });
        });
    }

    render() {
        return (
            <div>
              {/* Navbar for desktop */}
                <div className="navbar-fixed">
                    <nav className="black">
                        <div className="nav-wrapper navigation  ">
                            <NavLink
                                className="white-text"
                                to="/"
                                className="brand-logo center red-text text-darken-4">
                                PicsPro
                            </NavLink>
                            <NavLink
                                className="white-text"
                                to="#"
                                data-target="mobile-demo"
                                className="sidenav-trigger">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </NavLink>
                            <ul className="left hide-on-med-and-down">
                                <li>
                                    <NavLink className="white-text" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-trigger wide"
                                        href="#"
                                        data-target="interior">
                                        Categories
                                        <i className="fa fa-sort-desc"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>


              {/* DropDown Contents */}
                    <ul id="interior" className=" black dropdown-content">
                        <li>
                            <NavLink className="white-text" to="/food">
                                Food
                            </NavLink>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <NavLink className="white-text" to="/music">
                                Music
                            </NavLink>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <NavLink className="white-text" to="/people">
                                People
                            </NavLink>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <NavLink className="white-text" to="/tech">
                                Tech
                            </NavLink>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <NavLink className="white-text" to="/interior">
                                Interior
                            </NavLink>
                        </li>
                    </ul>
                </div>


              {/* Navbar for mobile */}
                <ul
                    style={{ width: "200px" }}
                    className="sidenav black white-text"
                    id="mobile-demo">
                    <li>
                        <NavLink className="white-text" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="divider"></li>
                    <br />
                    <li>
                        <NavLink to="#" className="white-text">
                            Categories
                        </NavLink>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <NavLink
                            className="white-text sidenav-close"
                            to="/food">
                            Food
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="white-text sidenav-close"
                            to="/music">
                            Music
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="white-text sidenav-close"
                            to="/people">
                            People
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="white-text sidenav-close"
                            to="/tech">
                            Tech
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="white-text sidenav-close"
                            to="/exterior">
                            Interior
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
