import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import CourtDetail from './components/CourtDetail';
import AddCourt from './components/AddCourt';
import AddReview from './components/AddReview';
import Profile from './components/Profile';
import Register from './components/Register';
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setIsLoggedIn(false);
      }
      const { data } = await axios.post(
        "http://localhost:4000/auth",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUser(user);
      setIsLoggedIn(true);
    };
    verifyCookie();
  }, [cookies, removeCookie]);

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
        <div className="content">
        <Routes>
          {/* If the user is not logged in, only show the login and register routes */}
          {!isLoggedIn && (
            <>
              <Route path="/" exact element={<Home/>} />
              <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
              <Route path="/login" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            </>
          )}

          {/* If the user is logged in, show the rest of the routes */}
          {isLoggedIn && (
            <>
              <Route path="/home" exact element={<Home isLoggedIn={isLoggedIn}/>} />
              <Route path="/court/:id" element={<CourtDetail />} />
              <Route path="/add-court" element={<AddCourt />} />
              <Route path="/add-review/:courtId" element={<AddReview />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
