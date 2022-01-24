import React, { useEffect, useState } from 'react';
import '../css/sign.css'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../DB/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from './Navbar';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="login-page">
            <Navbar />
            <div className="form">
                <div>
                    <input type="text" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={() => logInWithEmailAndPassword(email, password)}>login</button>
                    <p className="message">
                        <Link to="/reset">Forgot Password</Link>
                    </p>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </div>
            </div>
        </div>
    );

}

export default Login;