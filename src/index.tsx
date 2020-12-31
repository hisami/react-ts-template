import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "@pages/Home";

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("app")
);
