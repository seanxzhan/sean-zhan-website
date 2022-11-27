import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
