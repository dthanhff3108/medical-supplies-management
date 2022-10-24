import HomePage from 'app/pages/HomePage/HomePage';
import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

export type RoutesProps = {
  exact?: boolean;
  path: string;
  component: React.FC<{ history: any; location: any; match: any }>;
  auth?: boolean;
  routes?: Array<RoutesProps>;
  layout?: React.FC;
};

const renderRoutes = (routes: any, authenticated: boolean) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component || <div />;
        if (route.auth && !authenticated) {
          return <Redirect key={i} to="/signin" />;
        }
        return (
          <Route
            key={i}
            path={route.path}
            exact={!!route.exact}
            render={(props) => {
              return (
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes, authenticated)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export const routes = [
  {
    exact: true,
    path: '/notfound',
    component: () => <div>notfound</div>,
  },
  {
    exact: true,
    path: '/login',
    component: () => <div>login</div>,
  },
  {
    path: '*',
    // layout: AdminLayout,
    component: () => <Redirect to="/" />,
    routes: [
      // Users
      {
        exact: true,
        path: '/',
        component: () => <HomePage />,
      },
      {
        exact: true,
        path: '*',
        component: () => <Redirect to="/notfound" />,
      },
    ],
  },
];

export default renderRoutes;
