import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from './Component/Body';
import Passwords from './Component/passwords';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Passwords />} />
      <Route path="game" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
