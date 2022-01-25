import React from 'react';
import Navbar from '../common/Navbar';
import { Link } from "react-router-dom";
import '../css/styles.css'
import About from './About';
import Todo from './Todo';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <header className="masthead">
                    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h1 className="mx-auto my-0 text-uppercase">THE TODO</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, TODO demo App.</h2>
                                <Link className="btn btn-primary" to="/login">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <About />
                <Todo />
            </div>
        )
    }
}

export default Home;