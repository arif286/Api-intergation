import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/team/:teamId'>
            <Team/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
