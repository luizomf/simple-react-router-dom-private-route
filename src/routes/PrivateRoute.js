import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import t from 'prop-types';

export default function PrivateRoute({
  component: Component,
  isClosed,
  ...rest
}) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login/',
          state: { prevPath: rest.location.path },
        }}
      />
    );
  }

  // eslint-disable-next-line
  return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  component: t.oneOfType([t.element, t.func]).isRequired,
  isClosed: t.bool,
};
