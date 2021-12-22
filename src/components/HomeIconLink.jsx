import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeIconLink() {
  return (
    <div>
      <Link to="/">
        <FaHome size={30} />
      </Link>
    </div>
  );
}

export default HomeIconLink;
