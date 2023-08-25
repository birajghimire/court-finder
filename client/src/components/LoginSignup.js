import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function LoginSignUp({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toRegister = () => {
    navigate("/register");
  }

  return (
    <div className="auth-container">
       <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Please enter email' id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={password}  onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Please enter password' id="password" name="password"/>
        <button>Login</button>
      </form>
      <button onClick={toRegister}className="auth-button">Register</button>
    </div>
  )
}
