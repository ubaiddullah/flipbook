import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import Books from "./components/books";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/books" component={Books} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
