import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home";
import TimerPage from "./TimerPage/TimerPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BetAnswer from "./BetAnswer/BetAnswer";
import TimerPage2 from "./TimerPage2/TimerPage2";
import NewHome from "./newHome/NewHome";
function App() {
  return (
      <Router>
    <div className="App" dir="rtl">
        <Switch>
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
        <Route
            exact path="/timerPage2">
            <TimerPage2/>
        </Route>
        <Route
            exact path="/newhome">
            <NewHome/>
        </Route>
        </Switch>
    </div>

      </Router>
  );
}

export default App;
