// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Saturday from './pages/Saturday';
import Sunday from './pages/Sunday';

import NavBar from './components/NavBar';

//router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="saturday" element={<Saturday />} />
        <Route path="sunday" element={<Sunday />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
