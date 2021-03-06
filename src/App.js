import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import * as examples from './examples'

const routes = Object.keys(examples).map(name => ({
  path: `${name[0].toLowerCase()}${name.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase()}`,
  name
}));

const Home = () => {
  return (
    <>
      {routes.map(r => <Link key={r.path} to={`/${r.path}`}>{r.name}</Link>)}
    </>
  );
}

const App = () => {
  return (
    <div className="app">
      <Router>
        {routes.map(r => <Route key={r.path} path={`/${r.path}`} component={examples[r.name]} />)}
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
