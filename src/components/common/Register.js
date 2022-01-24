import React from 'react';
import '../css/sign.css';
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Navbar from './Navbar';

class SignUp extends React.Component {
    render() {
        return (
            <div className="login-page">
                <Navbar />
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;