import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Status from "./Pages/Status/index";
import { UserConsumer } from "./Context";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <UserConsumer>
        {() => {
          return (
            <Switch>
              <Route path="/" component={Status} />
            </Switch>
          );
        }}
      </UserConsumer>
    </Router>
  );
}

export default App;
