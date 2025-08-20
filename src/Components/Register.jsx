import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
  const navigate = useNavigate()
  
      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email, "Password:", password);
    }
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-indigo-600">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
  
          {/* Extra Links */}
          <p className="text-center text-sm text-gray-600 mt-6">
           Already have an account?{" "}
            <a onClick={()=>{
              navigate('/login')
            }} className="text-blue-600 hover:underline cursor-pointer">
              Sign in
            </a>
          </p>
        </div>
      </div>
    )
}

export default Register
