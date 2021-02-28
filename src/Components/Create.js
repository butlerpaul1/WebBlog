import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select required value={author} onChange={(e) => setAuthor(e.target.author)}>
          <option value="Elon Musk">Elon Musk</option>
          <option value="Bill Gates">Bill Gates</option>
          <option value="Steve Jobs">Steve Jobs</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;