import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Assembly from "./Pages/Assembly";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/assembly" component={Assembly} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
