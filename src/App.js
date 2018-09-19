import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Summary from "./Summary/Summary";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
