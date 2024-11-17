import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validation or authentication)
    console.log("Logging in with:", email, password);
    if (email === 'thilaneranda200@gmail.com' && password === '#Thila123@') {
      localStorage.setItem('user', email); // Save user info to localStorage
      navigate('/app'); // Redirect to the main App page if credentials match
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle password visibility
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)} // Toggle the password visibility
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
        >
          Login
        </button>
        <p className="mt-4 text-center text-white">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-500 underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
