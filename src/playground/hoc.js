import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in for having an access!</p>}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details."/>, document.getElementById('app'));