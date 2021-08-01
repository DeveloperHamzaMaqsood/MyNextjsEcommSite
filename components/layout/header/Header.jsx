import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <>
            <div className="banner-top container-fluid" id="home">
                <header>
                    <div className="row">
                        <div className="col-md-3 top-info text-left mt-lg-4">
                            <h6>Need Help</h6>
                            <ul>
                                <li>
                                    <i className="fas fa-phone"></i> Call</li>
                                <li className="number-phone mt-3">12345678099</li>
                            </ul>
                        </div>
                        <div className="col-md-6 logo-w3layouts text-center">
                            <h1 className="logo-w3layouts">
                                <a className="navbar-brand" href="index.html">
                                    Goggles </a>
                            </h1>
                        </div>

                        <div className="col-md-3 top-info-cart text-right mt-lg-4">
                            <ul className="cart-inner-info">
                                <li className="button-log">
                                    <a className="btn-open" href="#">
                                        <span className="fa fa-user" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li className="galssescart galssescart2 cart cart box_1">
                                        <button className="top_googles_cart" name="submit" value="">
                                            My Cart
                                            <i className="fas fa-cart-arrow-down"></i>
                                        </button>
                                </li>
                            </ul>
                            <div className="overlay-login text-left">
                                <button type="button" className="overlay-close1">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <div className="wrap">
                                    <h5 className="text-center mb-4">Login Now</h5>
                                    <div className="login p-5 bg-dark mx-auto mw-100">
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label className="mb-2">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""/>
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-2">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required=""/>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary submit mb-4">Sign In</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <div className="mobile-nav-button">
                            <button id="trigger-overlay" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="overlay overlay-door">
                            <button type="button" className="overlay-close">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <form action="#" method="post" className="d-flex">
                                <input className="form-control" type="search" placeholder="Search here..." required=""/>
                                <button type="submit" className="btn btn-primary submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>

                        </div>
                    </div>
                    <label className="top-log mx-auto"></label>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">

                        <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                
                            </span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-mega mx-auto">
                                <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link ml-lg-0">Home
                                        <span className="sr-only">(current)</span>
                                    </a></Link>
                                </li>
                                <li  className = "nav-item nav-link" >
                                    <Link href="/about">About</Link>
                                </li>
                                <li  className = "nav-item nav-link" >
                                    <Link href="/contact-us" >Contact</Link>
                                </li>
                                <li  className = "nav-item nav-link" >
                                <Link href="/checkout">
                                        Checkout
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>
                
            </div>
        </>
    )
}

export default Header
