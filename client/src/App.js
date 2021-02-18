import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Join } from "./components";
import { Chat } from "./components";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route exact path="/chat" component={Chat} />
    </Router>
  );
}
