import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Discover from './components/Discover';
import CourtDetail from './components/CourtDetail';
import AddCourt from './components/AddCourt';
import AddReview from './components/AddReview';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/court/:id" element={<CourtDetail/>} />
        <Route path="/add-court" element={<AddCourt/>} />
        <Route path="/add-review/:courtId" element={<AddReview/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
