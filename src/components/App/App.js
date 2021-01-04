import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import D1DrumKit from "../D1DrumKit/D1DrumKit";
import NAV from "../NAV/NAV";

const App = () => {
  return (
    <Router>
      <NAV />
      <Switch>
        <Route path="/D1" component={D1DrumKit} />
      </Switch>
    </Router>
  );
};

export default App;
