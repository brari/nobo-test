import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FilmDetail from "./components/FilmDetail";
import Home from "./components/Home";


function App() {
    return (
        <Router>
          
            <div className="App">
                <Switch>
                    <Route path="/detail" component={FilmDetail}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
