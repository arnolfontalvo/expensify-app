import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdmindWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. plase don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>      
      {props.isAuthenticated && <WrappedComponent {...props} />}
      {!props.isAuthenticated && <p>Please login!</p>}
    </div>
  );
};

const AdminInfo = withAdmindWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info='there are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='there are the details' />, document.getElementById('app'));