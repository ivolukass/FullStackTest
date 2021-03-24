import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import GraphQL from './components/GraphQL/GraphQL';
import Country from './components/GraphQL/Countries/Country';
import Error from './components/Error/Error';
import DetailsMain from './components/People/Person/Details/DetailsMain';
import about from './pages/about';

const App = () => (
  <BrowserRouter>
    <Container maxWidth='lg'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/people/:id' exact component={DetailsMain} />
        <Route path='/auth' exact component={Auth} />
        <Route path='/countries' exact component={GraphQL} />
        <Route path='/countries/:code' exact component={Country} />
        <Route path='/about' exact component={about} />
        <Route path='*' component={Error} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
