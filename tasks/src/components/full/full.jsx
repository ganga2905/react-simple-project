/*mern-login-project/
│
├── frontend/
│
└── backend/
BACKEND SETUP
1. Create Backend
mkdir backend
cd backend
npm init -y
2. Install Packages
npm install express mongoose cors dotenv bcryptjs jsonwebtoken

Dev package:

npm install --save-dev nodemon
3. Backend Folder Structure
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── middleware/
│
├── .env
├── server.js
└── package.json
4. package.json
"scripts": {
  "dev": "nodemon server.js"
}
5. .env
PORT=5000
MONGO_URL=your_mongodb_url
JWT_SECRET=mysecretkey
6. config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
7. models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },

  password: String,
});

module.exports = mongoose.model("User", userSchema);
8. controllers/authController.js
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};




// LOGIN
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Success",
      token,
      user,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
9. routes/authRoutes.js
const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
10. server.js
const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


// middleware
app.use(cors());

app.use(express.json());


// routes
app.use("/api/auth", require("./routes/authRoutes"));



app.get("/", (req, res) => {
  res.send("Server Running");
});


app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
Run Backend
npm run dev
FRONTEND SETUP
1. Create Frontend
npm create vite@latest frontend

Select:

React
JavaScript
2. Install Packages
cd frontend

npm install

npm install axios react-router-dom bootstrap
3. Frontend Folder Structure
frontend/
│
├── src/
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
4. main.jsx
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
5. App.jsx
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";


function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
6. pages/Register.jsx
import { useState } from "react";

import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(res.data.message);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container mt-5">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;
7. pages/Login.jsx
import { useState } from "react";

import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // save token
      localStorage.setItem(
        "token",
        res.data.token
      );

      alert(res.data.message);

      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container mt-5">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
API Flow
Frontend Form
     ↓
Axios POST Request
     ↓
Backend Route
     ↓
Controller
     ↓
MongoDB
     ↓
Response
     ↓
Frontend UI
API URLs
Register
POST
http://localhost:5000/api/auth/register
Login
POST
http://localhost:5000/api/auth/login
MongoDB Example Stored Data
{
  "_id": "12345",

  "name": "Ganga",

  "email": "ganga@gmail.com",

  "password": "$2a$10$hashedpassword"
}*/