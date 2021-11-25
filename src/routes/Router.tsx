import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RouteConstants from 'routes/RouteConstants';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Forecast from 'pages/Home/Forecast';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path={RouteConstants.Home} component={Home} />
        <Route exact path={RouteConstants.Forecast} component={Forecast} />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
