import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage"; // Correct path

const App = () => {
  return (
    <Router>
      <Routes>
        {/* This will render PortfolioPage when accessing the root path "/" */}
        <Route path="/" element={<PortfolioPage />} />
        {/* If you want other pages like /portfolio, you can add them here */}
      </Routes>
    </Router>
  );
};

export default App;
