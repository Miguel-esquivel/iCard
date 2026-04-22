import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { map } from 'lodash';
import routes from './routes';

export function Navigation() {
  return (
    <>
      <Routes>
        {map(routes, (route, index) => {
          const Layout = route.layout;
          const Component = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}