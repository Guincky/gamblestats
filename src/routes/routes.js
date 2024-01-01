import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JogosDia from "../views";
import Entrada from "../views/Entrada.js";
import JogosAmanha from "../views/jogosAmanha";
import Sorteio from "../views/Sorteio.js";

const Routes = () => {
    return (
        <Router>
            <Switch>

                <Route path="/hoje" component={ JogosDia } />  
                <Route path="/sorteio" component={ Sorteio } /> 
                <Route path="/amanha" component={ JogosAmanha } />  
                <Route path="/" component={ Entrada } />  
                    
        
            </Switch>
        </Router>
    )
}

export default Routes;
