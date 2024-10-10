import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            phone,
            password,
            role,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/register', newUser);
            if (response.status === 200) {
                alert('Registration Successful!'); // Show alert on success
                navigate('/'); // Navigate to login page after successful registration
            }
        } catch (error) {
            console.error("There was an error registering!", error);
            alert('Registration failed. Please try again.'); // Show alert on failure
        }
    };

    const handleLoginRedirect = () => {
        navigate('/');
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Institute">Institute</option>
                </select>
                <button type="submit">Register</button>
            </form>
            <button onClick={handleLoginRedirect}>Login</button> {/* Redirect to Login */}
        </div>
    );
};

export default Registration;
