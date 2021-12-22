import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import feedBackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(feedBackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?"));

    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (fb) => {
    const other = [...feedback];
    other.push(fb);

    // shortcut
    //setFeedback([fb, ...feedBackData]);
    setFeedback(other);
  };
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} feedback={feedback} />
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
        <AboutIconLink />
      </div>
    </>
  );
}

export default App;
