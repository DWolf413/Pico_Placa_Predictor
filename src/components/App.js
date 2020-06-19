import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import HomePageContainer from '../pages/HomePageContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
