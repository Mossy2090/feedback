import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ fb }) {
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{fb.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedBack(fb.id)} color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(fb)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-dispaly">{fb.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  fb: PropTypes.object.isRequired,
};
export default FeedbackItem;
