import BlogList from "./BlogList";
import useFetch from "../APIRepo/useFetch";
import config from '../config/config.json'

const Home = () => {
  const { isLoading, blogs: blogs ,error } = useFetch(config.apiUrl + "blogs/")

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