import './App.css';
import './theme.scss'
import React from 'react'
import * as Layout from './Layout';
import MiddleWeare from './Routes/MiddleWeare';
import { Router } from '@reach/router';
import { nonAuthRoutes, authRoutes } from './Routes/routes';
const App = () => {
  return (
    <Router>
      {
        React.Children.toArray(
          nonAuthRoutes.map(({ page, path }, id) => {
            return (
              <MiddleWeare layout={Layout.NonAuthLayout} path={path} component={page} />
            )
          })
        )
      }
      {
        React.Children.toArray(
          authRoutes.map(({ page, path }, id) => {
            return (
              <MiddleWeare layout={Layout.AuthLayout} path={path} component={page} />
            )
          })
        )
      }
    </Router>
  );
}

export default App;
