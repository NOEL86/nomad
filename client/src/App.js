import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
