import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home";
import TimerPage from "./TimerPage/TimerPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BetAnswer from "./BetAnswer/BetAnswer";

function App() {
  return (
      <Router>
    <div className="App" dir="rtl">
        <Route
            exact path="/home">
            <Home/>
        </Route>
            <Route
                exact path="/timerPage">
                <TimerPage/>
            </Route>
        <Route
            exact path="/BetAnswer">
            <BetAnswer/>
        </Route>

    </div>
      </Router>
  );
}

export default App;
