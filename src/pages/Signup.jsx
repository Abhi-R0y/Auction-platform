import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:5000/auth/signup", formData);
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border p-2 mb-2 w-full"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-2 w-full"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
