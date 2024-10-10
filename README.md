This is a full stack application for managing users with features for registration, login, and CRUD operations (Create, Read, Update, Delete). The project is built using React for the frontend and Node.js with Express for the backend, with MongoDB as the database.

## Project Overview

The application consists of three main pages:
1. **Login Page**: Allows users to log in.
2. **Registration Page**: Allows new users to register.
3. **Home Page**: Displays a list of registered users with options to edit and delete users.

## Features
- User registration and login.
- Display of all registered users.
- Edit and delete functionality for user management.

## Technologies Used
- **Frontend**: React, Redux Toolkit, Axios, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Vikascoder1/Sukriti.git

##2. Install Dependencies

##Navigate to the project directory and install the backend dependencies:
 
cd my-fullstack-app/backend

npm install

Install the frontend dependencies:

cd ../frontend

npm install

##3. Set Up MongoDB

Make sure you have MongoDB installed and running on your local machine.

##Running the Project
##1. Start the Backend Server

Navigate to the backend directory and start the server:

cd backend

node server.js

##2. Start the Frontend Application

In a new terminal, navigate to the frontend directory and start the React application:

cd frontend

npm start

##3. Access the Application

Open your browser and go to http://localhost:3000 to access the application.


##Approach and Problem Solving:

##Approach

The project was designed to provide a simple user management interface that allows users to register, log in, and manage other users. The frontend communicates with the backend through RESTful APIs, and Redux Toolkit is used for state management.

Problems Faced and Solutions Implemented
Routing Issues: Initially, I faced challenges with routing between the login, registration, and home pages. This was resolved by ensuring proper use of react-router-dom and configuring routes correctly.

Data Not Displaying on Home Page: After registering users, the home page was not displaying user data. This was solved by ensuring that the Redux store was being updated correctly after fetching users and that the components were subscribed to the state.

API Errors: Encountered errors while making API calls. These were resolved by checking the server routes and ensuring that the correct endpoints were being used in the frontend.

User State Management: Managing user state with Redux Toolkit was initially confusing, but the use of createSlice and createAsyncThunk made it easier to handle asynchronous actions and maintain the state.

User Interaction Feedback: Initially, there were no alerts for successful registration or login. I added alerts to inform users about the success of their actions, improving user experience.

By addressing these challenges, the application has become a robust and user-friendly platform for managing users.




