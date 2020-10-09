import React from "react";
import "./styles.css";
import Navbar from "./Page/Navbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import DetailUser from "./Page/DetailUser";
import ProtectedRoute from "./Component/ProtectedRoute";
import Login from "./Page/Login";
import Register from "./Page/Register";
import NotFound from "./Page/NotFound";
import Corona from "./Page/Corona";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact />
            </Navbar>
          </Route>
          <Route path="/corona">
            <Navbar>
              <Corona />
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id">
            <Navbar>
              <DetailUser />
            </Navbar>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <ProtectedUserLogin/> */}
          {/* <ProtectedUserLogin/> */}
          <Route path={`*`} component={NotFound}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
