//home page template
import { useState, useEffect} from 'react'
import BlogList from './BlogList';
import config from '../config/config.json'

const Home = () => {
  //functions 
  const [blogs, setBlogs] = useState([]);

  //run when on re-render
  useEffect(() => {
    fetch(config.apiUrl + "blogs/")
    .then(res => { //get the result from the api
      return res.json()
    }) // get the data from the result
    .then((data) => {
      setBlogs(data);
    })
    //only fire once on first render
  }, []);

  return (
    <div className="home">
      {/* only render blog list if it isn't null */}
      {blogs && <BlogList blogs={blogs}/>}
    </div>
  );
}

export default Home;