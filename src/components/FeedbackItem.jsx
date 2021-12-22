import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ fb, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{fb.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(fb.id)} color="purple" />
      </button>
      <div className="text-dispaly">{fb.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  fb: PropTypes.object.isRequired,
};
export default FeedbackItem;
