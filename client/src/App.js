import Hero from "./components/homepage/Hero";
import Profile from "./components/profile/Profile";
import Errors from "./components/error/Errors";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/api/profile">
          <Profile />
        </Route>
        <Route path="/error">
          <Errors />
        </Route>
      </Switch>
      </div>
    </Router>  
  );
}

export default App;
