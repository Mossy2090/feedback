import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
//import Button from "./shared/Button";

function Test() {
  const status = 200;

  const navigate = useNavigate();

  // after updating something on the server we may want
  // to go to another page , this is how we do it
  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div className="container">
      <div className="card">
        <h1>Test</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
          <Route path="/show" element={<h1>Hello From React!</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Test;
