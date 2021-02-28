///Nav Bar Menu
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Home</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar
