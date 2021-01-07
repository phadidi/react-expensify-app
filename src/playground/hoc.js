import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>;
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Private Data, DO NOT SHARE!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Login required to view deets</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo info="deets" isAuthenticated={true} />,
  document.getElementById('app')
);
