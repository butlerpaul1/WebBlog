const BlogList = ({blogs, handleDelete}) => {
  //get the blogs object

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>Remove Blog</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;