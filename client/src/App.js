import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/login" component={LoginSignup} />
        <Route path="/discover" component={Discover} />
        <Route path="/court/:id" component={CourtDetail} />
        <Route path="/add-court" component={AddCourt} />
        <Route path="/add-review/:courtId" component={AddReview} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
    
  );
}

export default App;
