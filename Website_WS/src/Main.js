import React from "react";
import Login from "./Login";
import Register from "./Register";
import {Switch,Route} from 'react-router-dom';
import Aboutus from "./Aboutus";
export default function Main() {
    return (
        <div className="section main col-md-12">
            <div className="container">
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/about-us">
                        <Aboutus/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}