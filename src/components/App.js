import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
