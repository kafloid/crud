import React from 'react';
import '../css/sign.css'
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../DB/Firebase";
import Navbar from './Navbar';

class Login extends React.Component {
    render() {
        return (

            <div class="login-page">
                <Navbar />
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;