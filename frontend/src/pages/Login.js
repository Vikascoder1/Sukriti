import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            if (response.status === 200) {
                alert('Login Successful!'); // Show alert on successful login
                navigate('/home'); // Navigate to home after successful login
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert('Login failed. Please check your credentials and try again.'); // Show alert on failure
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register'); // Redirect to registration page
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleRegisterRedirect}>Register</button> {/* Redirect to Register */}
        </div>
    );
};

export default Login;

