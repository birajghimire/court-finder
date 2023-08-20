import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginSignUp({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/home")
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
