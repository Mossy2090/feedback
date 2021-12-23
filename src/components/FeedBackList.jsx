import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>No FeedBack yet</p>;

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((fb) => (
          <motion.div
            key={fb.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={fb.id} fb={fb} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((fb) => (
  //       <FeedbackItem handleDelete={handleDelete} key={fb.id} fb={fb} />
  //     ))}
  //   </div>
  // );
}

export default FeedBackList;
