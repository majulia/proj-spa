import React from 'react';
import './App.css';
import Header from './components/Header.js'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Time from './components/pages/Time/Time'
import Login from './components/pages/Login/Login'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
   <BrowserRouter>
     <Header />
     <Switch>
       <Route path='/'exact component={Home} />
       <Route path='/services' component={Services} />
       <Route path='/time' component={Time} />
       <Route path='/login' component={Login} />
     </Switch>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;

// parei 01:55:22
