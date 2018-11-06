//HOC higher order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info title</h1>
        <p>info content {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAdmin && <p>This is private information, no share.</p>}
          <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {!props.isAuthenticated && <p>please login to view info</p>}
            {props.isAuthenticated && <WrappedComponent {...props} /> }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AuthInfo isAuthenticated = {false} info = "sometext"/>,document.getElementById('app'));