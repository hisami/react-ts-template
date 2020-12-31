import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { HomeContainer } from "@Pages/Home";

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("app")
);
