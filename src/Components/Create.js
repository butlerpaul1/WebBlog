import { useState } from "react";
import postFetch from "../APIRepo/postFetch";
import config from '../config/config.json';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  //handle user input
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    console.log(blog);
    setIsPending(postFetch(config.apiUrl + "blogs/", blog));
    //if the blog has been successfully added, redirect to list of blogs
    if(!isPending)
    {
      history.push('/');
    }
    
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