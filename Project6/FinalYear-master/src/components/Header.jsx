import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/Header.css";
import logo from "../assets/img/we.png";
import { Contact } from './Contact';

function Account(props) {
    return (
        <>
            <li><NavLink className="dropdown-item" to="#">Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Dashboard</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Order Details</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Order History</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Edit Profile</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Edit Address</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Edit Password</NavLink></li>
        </>
    );
}

function Pages(props) {
    return (
        <>
            <li><NavLink className="dropdown-item" to="#">About Us</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Contact Us</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Terms And Conditions</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">FAQ</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Blog</NavLink></li>

        </>
    );
}

export const Header = (props) => {
    return (
        <div className="header-lg">
            <nav className={`navbar navbar-expand-lg header-sec1 navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode==='light'?'dark':'light'}`}>
                            <li className={`nav-item `}>
                                <NavLink className="nav-link active" aria-current="page" to="#">{props.home}</NavLink>
                            </li>
                            <li className={`nav-item`}>
                                <NavLink className="nav-link active" aria-current="page" to="#">{props.about}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Contacts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Track Order</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Blog</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-0">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Account />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link pe-none" to="#"><b>Currency : </b><strong>IN</strong></NavLink>
                            </li>

                        </ul>
                        <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container header-sec2" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-3">
                        <img src={logo} alt="LOGO" class="logo" />
                    </div>
                    <div className="col-6">
                        <div class="search">
                            <i class="fa fa-search" style={{color:props.mode=== 'dark'?'white': 'black'}}></i>
                            <input type="text" class="form-control" placeholder="Search over 10,000 products" />
                            <button class="btn btn-primary">Search</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <b>Customer Service</b><br></br>
                        <strong>(+91) XXXXXX4307</strong>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg header-sec3">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                            <li className="nav-item nav-left">
                                <NavLink className="nav-link active" aria-current="page" to="/">Shop By Category</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-0">

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Electronics
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Essentials
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Account />
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Pages />
                                </ul>
                            </li>

                            <li className="nav-link">
                                <button type="button" class=" position-relative">
                                    <i class="far fa-heart"></i>
                                    <span class="position-absolute translate-middle points">
                                        1
                                    </span>
                                </button>
                            </li>
                            <li className="nav-link">
                                <button type="button" class="position-relative">
                                    <i class="far fa-shopping-cart"></i>
                                    <span class="position-absolute translate-middle points">
                                        1
                                    </span>
                                </button>
                            </li>

                            <li className="nav-link">
                                <button type="button" class="position-relative">
                                    <i class="far fa-user"></i>

                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
