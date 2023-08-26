import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import CourtDetail from './components/CourtDetail';
import AddCourt from './components/AddCourt';
import AddReview from './components/AddReview';
import Profile from './components/Profile';
import Register from './components/Register';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
