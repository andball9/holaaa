import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import AdminLayout from "./layouts/Admin.jsx";

const hist = createBrowserHistory();

export default class index extends Component {

  render() {
    return (
      <div>
        <Router history={hist}>
          <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
          </Switch>
        </Router>,
      </div>
    )
  }
}
