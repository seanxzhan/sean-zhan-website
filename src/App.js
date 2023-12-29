import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home, Proj} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/projects" element={ <Proj /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
