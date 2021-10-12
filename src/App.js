import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DrawerLeft from "./components/drawer/Drawer";
import { store, useGlobalState } from "state-pool";

store.setState("logedIn", false);

const App = () => (
  <Router>
    <Fragment>
      <main>
        <DrawerLeft />
         
      </main>
    </Fragment>
    
  </Router>
  
);

export default App;
