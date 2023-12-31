import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JogosDia from "../views";
import Entrada from "../views/Entrada.js";
import Header from "../components/header";
import JogosAmanha from "../views/jogosAmanha";

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>

                <Route path="/hoje" component={ JogosDia } />  
                <Route path="/amanha" component={ JogosAmanha } />  
                <Route path="/" component={ Entrada } /> 
                    
        
            </Switch>
        </Router>
    )
}

export default Routes;
