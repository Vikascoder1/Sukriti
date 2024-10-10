// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUser } from '../redux/userSlice'; // Ensure the path is correct
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { users, loading } = useSelector((state) => state.users);

//     useEffect(() => {
//         dispatch(fetchUsers());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this user?")) {
//             dispatch(deleteUser(id));
//         }
//     };

//     const handleEdit = (user) => {
//         navigate(`/edit/${user._id}`, { state: user });
//     };

//     return (
//         <div className="home">
//             <h1>User List</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Role</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.length > 0 ? (
//                             users.map((user) => (
//                                 <tr key={user._id}>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.phone}</td>
//                                     <td>{user.role}</td>
//                                     <td>
//                                         <button onClick={() => handleEdit(user)}>Edit</button>
//                                         <button onClick={() => handleDelete(user._id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5">No users found</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Home;

// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id)); // Dispatch delete action
        }
    };

    const handleEdit = (user) => {
        navigate(`/edit/${user._id}`, { state: user }); // Navigate to edit page
    };

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
