import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const res = await axios.post("http://localhost:5000/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      navigate("/auctions");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-2 w-full"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
