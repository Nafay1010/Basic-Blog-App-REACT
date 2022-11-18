import { useState} from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('mario')
    const [body, setBody] = useState('')
    
    const Navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title, author, body}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "Application/JSON"},
            body: JSON.stringify(blog)
        }).then(()=>{
            Navigate('/')
        })
    }

    return ( 
        <div className="create">
            <h1>Creating Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text"
                required
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={e=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={e=>setAuthor(e.target.value)}>
                    <option value="Nafay">Nafay</option>
                    <option value="Usman">Usman</option>
                </select>
                <div className="addbtn">
                <button>Add Blog</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddBlog;