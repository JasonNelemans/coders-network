import React from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import DevelopersList from "./pages/DevelopersList";
import PostDetails from "./pages/PostDetails";
import DeveloperDetails from './pages/DeveloperDetails';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route exact path="/developers" component={DevelopersList} />
        <Route path="/developers/:id" component={DeveloperDetails} />
      </Switch>
    </div>
  );
}

export default App;
