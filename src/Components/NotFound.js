import { Link } from "react-router-dom"

//redirect the user on 404
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The page you are looking for can't be found.</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFound;