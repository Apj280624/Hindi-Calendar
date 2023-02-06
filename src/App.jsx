import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My routes
import MonthlyCalPage from "./routes/MonthlyCalPage/index.jsx";
import SelectionPage from "./routes/SelectionPage/index.jsx";

// My components
import Navbar from "./components/Navbar/index.jsx";

// My css
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/monthly-calendar/:monthName/:monthNumber"
            element={<MonthlyCalPage />}
          />
          <Route exact path="/" element={<SelectionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
