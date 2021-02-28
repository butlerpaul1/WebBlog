//home page template
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import config from '../config/config.json'

const Home = () => {
  //functions 
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //run when on re-render
  useEffect(() => {
    fetch(config.apiUrl + "blogs/")
      .then(res => { //get the result from the api
        if (!res.ok) {
          throw Error()
        }
        return res.json()
      }) // get the data from the result
      .then((data) => {
        setBlogs(data);
        //once we have the data remove the loading message
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error.message);
        setError(error.message);
      })
    //only fire once on first render
  }, []);

  return (
    <div className="home">
      {/* only render blog list if it isn't null */}
      {isLoading && <div> Loading Blogs.... </div>}
      {blogs && <BlogList blogs={blogs} />}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Home;