//home page template
import { useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
  //functions 

  const [blogs, setBlogs] = useState([
  ]);

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter( blog => blog.id !== id);
    setBlogs(filteredBlogs);
  }

  //run when on re-render
  useEffect(() => {

  });

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={ handleDelete } />
    </div>
  );
}

export default Home;