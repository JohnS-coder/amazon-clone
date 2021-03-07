import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      {/* <h1>My-AWS is coming with react!!..  </h1> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            {/* <Header/> */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
