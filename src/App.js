import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Rooms from './pages/rooms';
import SingleRoom from './pages/singleRoom';
import Navbar from './components/navbar';
import ErrorPage from './pages/errorPage';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path= "/rooms" component= {Rooms} />
        <Route exact path= "/rooms/:slug" component= {SingleRoom} />
        <Route exact component= {ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
