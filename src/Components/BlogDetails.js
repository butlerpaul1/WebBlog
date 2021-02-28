import { useParams } from "react-router";
import useFetch from "../APIRepo/useFetch";
import config from '../config/config.json';

const BlogDetails = () => {
  //get the id from the route
  const { id } = useParams();
  const { isLoading, blogs: blog, error } = useFetch(config.apiUrl + "blogs/" + id);

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
        </article>
      }

    </div>
  );
}

export default BlogDetails;