import { useState } from "react";
import postFetch from "../APIRepo/postFetch";
import config from '../config/config.json'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  //handle user input
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    console.log(blog);
    setIsPending(postFetch(config.apiUrl + "blogs/", blog));
    
  }

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Elon Musk">Elon Musk</option>
          <option value="Bill Gates">Bill Gates</option>
          <option value="Steve Jobs">Steve Jobs</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding your blog...</button>}
      </form>
    </div>
  );
}

export default Create;