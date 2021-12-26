import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Component/Header';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/postDetails/:id" component={Details} />

          </Switch>
        </div>
      </Router>
    </div>


  );
}

export default App;
