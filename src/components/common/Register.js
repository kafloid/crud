import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import '../css/sign.css';
import { withFormik } from "formik";
import * as Yup from "yup";
import Navbar from './Navbar';

import {
    auth,
    registerWithEmailAndPassword,
} from "../DB/Firebase";

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="login-page">
            <Navbar />
            <div className="form">
                <div>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={register}>register</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    );

}

export default SignUp;