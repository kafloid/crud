import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../DB/Firebase";
import "../css/sign.css";
import Navbar from "./Navbar";
function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login-page">
            <Navbar />
            <div className="form">
                <div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                    <button onClick={() => sendPasswordReset(email)}>Send password reset email</button>
                    <p className="message">Don't have an account? <Link to="/register">Register</Link> now.</p>
                </div>
            </div>
        </div>
    );
}
export default Reset;