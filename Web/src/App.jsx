import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Processing from "./pages/Processing/Processing";
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/processing" element={<Processing />} />
      </Routes>
    </Router>
  );
}

export default App;
