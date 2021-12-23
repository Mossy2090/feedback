import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Header />

      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedBackList />
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
