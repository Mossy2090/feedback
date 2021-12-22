import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactDom from "react-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./components/pages/AboutPage";
import Test from "./components/Test";

reactDom.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/test/*" element={<Test />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
