import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function LoginSignUp({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/home")
  }

  const toLogin = () => {
    navigate("/login");
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Please enter email' id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={password}  onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Please enter password' id="password" name="password"/>
        <label htmlFor="name">name</label>
        <input value={name}  onChange={(e) => setName(e.target.value)} type='name' placeholder='Please enter name' id="name" name="name"/>
        <button>Register</button>
      </form>
      <button onClick={toLogin} className="auth-button">Login</button>
    </div>
  )
}