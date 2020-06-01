import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./components/View";
import Home from "./containers/Home";
import Post from "./containers/Post";
import "./assets/css/app.css";

function App() {
  return (
    <Router>
      <View className="app">
        <View className="container">
          <View className="row">
            <View className="col-md-8 offset-md-2">
              <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/post/:id" component={Post} />
              </Switch>
            </View>
          </View>
        </View>
      </View>
    </Router>
  );
}

export default App;
