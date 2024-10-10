// src/pages/EditUser.js
import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../redux/userSlice'; // Assume you create this action

const EditUser = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [role, setRole] = useState(user.role);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, name, email, phone, role };
        dispatch(updateUser(updatedUser)); // Dispatch update action
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Institute">Institute</option>
                </select>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default EditUser;
