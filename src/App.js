import React, { useState } from 'react';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

import 'rsuite/dist/rsuite.min.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (username, password) => {   
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
    }
  };

  return (
    <div className="App">
      {authenticated ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleAuthentication} />
      )}
    </div>
  );
};

export default App;
