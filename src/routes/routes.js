import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JogosDia from "../views";
import Entrada from "../views";
import Header from "../components/header";
import JogosAmanha from "../views/jogosAmanha";

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>

                <Route path="/jogosdehoje" exact component={ Entrada } />
                <Route path="/sex" component={ JogosAmanha } />
            </Switch>
        </Router>
    )
}

export default Routes;
