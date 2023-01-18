import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default Login = (props) => {
  const { setUser } = props;
  
  // useState to update and track the input fields from the login page
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/users/login`, { username, password });
      console.log(response);
      if (response) navigate('/dashboard');
      // setUser('test');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid Username/Password');
      console.log('err:', err)
    }
  };
  return (
    <div >
      {/* display error message if error */}
      <div>{error}</div>
      {/* useState to track the data in each input field */}
      <form
        onSubmit={handleLogin}
      >
        <input
          placeholder="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <div>
        <br/>
          Don't have an account? 
        <br/>
        <Link to="/signup">
          Sign up right here!
        </Link>
      </div>
    </div>
  );
};
