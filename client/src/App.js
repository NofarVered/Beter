import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home";
import TimerPage from "./TimerPage/TimerPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
        <Route
            exact path="/home">
            <Home/>
        </Route>
            <Route
                exact path="/timerPage">
                <TimerPage/>
            </Route>


    </div>
      </Router>
  );
}

export default App;
