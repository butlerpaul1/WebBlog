import { useParams } from "react-router";
import useFetch from "../APIRepo/useFetch";
import deleteFetch from "../APIRepo/deleteFetch";
import config from '../config/config.json';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  //get the id from the route
  const { id } = useParams();
  const history = useHistory();
  const { isLoading, blogs: blog, error } = useFetch(config.apiUrl + "blogs/" + id);

  const handleDelete = () => {
    deleteFetch(config.apiUrl + "blogs/" + blog.id);
    history.push('/');
  }

  return (
    <div className="blog-details">
      {/* only render blog list if it isn't null */}
      {isLoading && <div> Loading Blogs.... </div>}
      {error && <div>{error}</div>}
      {blog &&
        <article>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      }

    </div>
  );
}

export default BlogDetails;