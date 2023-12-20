import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartproducts = useSelector((state) => state.cart);
    let m = 0;
    cartproducts.map((product) => m += product.qty);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 " style={{ boxShadow: "-10px 0px 10px rgba(0, 0, 0, 0.182)" }}>
                <div className="container">
                    <a onClick={(cartproducts) => console.log(cartproducts)} className="navbar-brand fw-bold fs-4 " href="/">Fashion Collection</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/about">About Us</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="/login" className="btn btn-outline-dark">
                                <i className="fafa-sign-in me-1 "></i> Login
                            </a>
                            <a href="/register" className="btn btn-outline-dark ms-2">
                                <i className="fafa-user-plus "></i> Register
                            </a>
                            <a href="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fafa-shopping-cart me-1 "></i> Cart ({m})
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;