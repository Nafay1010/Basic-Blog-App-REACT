import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blogs, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const Navigate = useNavigate()

    const goback = ()=>{
        Navigate('/')
    }

    const handledelete = ()=>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            Navigate('/')
        })
    }

    return (

        <div className="blog-details">
            {isPending && <h1>Loading...</h1>}
            {error && <div>{error}</div>}
            {blogs && 
            <article>
                <h1>{blogs.title}</h1>
                <div className="deletebtn">
                <button onClick={handledelete}><FontAwesomeIcon icon={faTrash}/></button>
                </div>    
                <p>{blogs.body}</p>    
                <div className="written-by">
                    <h4>Written By {blogs.author}</h4>
                    <button onClick={goback}>Go Back</button>
                </div>
            </article>}

        </div>
     );
}
 
export default BlogDetails;