import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Register from './components/Register';
import Discover from './components/Discover';
import CourtDetail from './components/CourtDetail';
import AddCourt from './components/AddCourt';
import AddReview from './components/AddReview';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        {/* Commented out navbar because there was not styling
        <NavBar /> */}
        <Routes>
          {/* For now just had home go to login screen
          TODO: write logic to go to home screen when not
          logged in else go to home */}
          <Route path="/" exact element={<LoginSignup/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/discover" element={<Discover/>} />
          <Route path="/court/:id" element={<CourtDetail/>} />
          <Route path="/add-court" element={<AddCourt/>} />
          <Route path="/add-review/:courtId" element={<AddReview/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
