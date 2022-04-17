import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/css/Footer.css";


export const Footer = (props) => {
    return (
        <div className={`container-fluid bg-${props.mode}`} style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
            <hr />

            <footer className={`container `}>

                <div className="row height d-flex justify-content-center">
                    <div className="col-md-3 col-sm-12">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i className="fas fa-globe-asia"></i> Pauri Garhwal, Uttarakhand</li>
                            <li><i className="far fa-envelope"></i> fyear414@gmail.com</li>
                            <li><i className="fas fa-mobile-alt"></i>(+91)XXXXXX4307</li>
                            <li><i className="far fa-clock"></i>Mon-Sat 10:00pm - 7:00pm</li>
                        </ul>
                    </div>
                    <div className={`col-md-3 col-sm-6 style="color: black; text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                        <h4>Information</h4>
                        <ul className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <li><NavLink to="" className="nav-link">About Us</NavLink></li>
                            <li><NavLink to="" className="nav-link">Privacy Policy</NavLink></li>
                            <li><NavLink to="" className="nav-link">Contact Us</NavLink></li>
                            <li><NavLink to="" className="nav-link">Returns</NavLink></li>
                            <li><NavLink to="" className="nav-link">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-6" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
                        <h4>My Account</h4>
                        <ul>
                            <li><NavLink to="" className="nav-link">Order History</NavLink></li>
                            <li><NavLink to="" className="nav-link">Wish List</NavLink></li>
                            <li><NavLink to="" className="nav-link">Newsletter</NavLink></li>
                            <li><NavLink to="" className="nav-link">Affiliate</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h4>Newsletter</h4>
                        <p>“Play by the rules, but be ferocious.”</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email Address...." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h6>Powered by React - Design by (2018 - 2022) Batch</h6>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h6 className="icon">
                        <i className="fab fa-cc-paypal"></i>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fas fa-rupee-sign"></i>
                    </h6>
                </div>
            </div>
        </div>
    );
}
