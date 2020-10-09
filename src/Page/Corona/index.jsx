import React from "react";
import {NavLink, Switch, Route, useRouteMatch} from "react-router-dom"

const Corona = () => {
    let Match = useRouteMatch();

    console.log(Match)
  return (
    <React.Fragment>
      <h3>Belajar Nested Route</h3>
      <NavLink to={`${Match.url}/positif`} activeStyle={{
          fontWeight: "bold",
          color: "red"
      }}>Data Positif</NavLink>
      <NavLink to={`${Match.url}/sembuh`} activeStyle={{
          fontWeight: "bold",
          color: "red"
      }}>Data sembuh</NavLink>
      <NavLink to={`${Match.url}/meninggal`} activeStyle={{
          fontWeight: "bold",
          color: "red"
      }}>Data meninggal</NavLink>
      
      <Switch>
          <Route path="/corona/positif">
              <h2>Data Positif</h2>
          </Route>
          <Route path="/corona/sembuh">
              <h2>Data sembuh</h2>
          </Route>
          <Route path="/corona/meninggal">
              <h2>Data meninggal</h2>
          </Route>
      </Switch> 
    </React.Fragment>
  );
};

export default Corona;
