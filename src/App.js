import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DrawerLeft from "./components/drawer/Drawer";
import { store, useGlobalState } from "state-pool";

store.setState("logedIn", false);

const App = (props,{hello}) => {

    const [logedin, setLogedin] = useGlobalState("logedIn");

    const logout = ()=>{
        setLogedin(false);
        localStorage.clear();
        window.location.reload();
        props.hello();
    }


    return(
        <Router>
            <Fragment>
                <main>
                    <DrawerLeft logout={logout} />
                </main>
            </Fragment>

        </Router>
    )
};

export default App;
