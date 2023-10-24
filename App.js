import React, { Component } from "react";
import LoginView from "./src/LoginView";
import { Actions, Router, Scene } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} title="Login" hideNavBar />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
