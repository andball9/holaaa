import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// // styles
// import "assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss";
// import "assets/demo/demo.css";
import Indexsei from "./Sinformacion/index.js";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/index-sections/SectionLogin.js";
import PerrosPage from "views/Page/Perros.js";
import GatosPage from "views/Page/Gatos.js";

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
      <Route
        path="/perros-page"
        render={props => <PerrosPage {...props} />}
      />
      <Route
        path="/gatos-page"
        render={props => <GatosPage {...props} />}
      />
      <Indexsei/>
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
