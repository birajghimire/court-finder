import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import axios from 'axios'

export default function LoginSignUp({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/signup",
        {
          email,
          password,
          username,
          firstname,
          lastname,
          username
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
        <label htmlFor="first name"> first name</label>
        <input value={firstname}  onChange={(e) => setFirstName(e.target.value)} type='firstname' placeholder='Please enter first name' id="firstname" name="firstname"/>
        <label htmlFor="last name"> last name</label>
        <input value={lastname}  onChange={(e) => setLastName(e.target.value)} type='lastname' placeholder='Please enter last name' id="lastname" name="lastname"/>
        <label htmlFor="user name"> user name</label>
        <input value={username}  onChange={(e) => setUserName(e.target.value)} type='username' placeholder='Please enter user name' id="username" name="username"/>
        <button>Register</button>
      </form>
      <button onClick={toLogin} className="auth-button">Login</button>
    </div>
  )
}