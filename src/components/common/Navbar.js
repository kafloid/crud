import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {



    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">THE TODO</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><Link className="nav-link" to="/examples">Examples</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/register">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
                { }
            </nav>
        )
    }
}

export default Navbar;