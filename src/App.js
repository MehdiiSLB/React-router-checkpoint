import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./components/Data";
import "antd/dist/antd.css";
import "."
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Data />
        </Route>
        {
          <Route path="/Details/:id">
            <Container></Container>
          </Route>
        }
      </Switch>
    </Router>
  );
}
export default App;

/* return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about/1">1</Link>
          </li>
          <li>
            <Link to="/about/2">2</Link>
          </li>
          <li>
            <Link to="/about/3">3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {" "}
        <Route exact path="/">
          {" "}
          {/*exact principalpage / }
          <Home />
        </Route>
        <Route path="/about/:id">
          <About />
        </Route>
      </Switch>
    </Router>
  ); */
