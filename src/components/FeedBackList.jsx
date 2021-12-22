import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedBackList({ feedback, handleDelete }) {
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
            <FeedbackItem handleDelete={handleDelete} key={fb.id} fb={fb} />
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

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
export default FeedBackList;
