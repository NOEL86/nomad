import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
