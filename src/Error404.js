import {Link} from 'react-router-dom'
const Error404 = () => {
    return ( 
        <div className="error404">
            <h1>Ooops! The Page you are looking for is not avalaible</h1>
            <h4>Check the URL</h4>
            <Link to={"/"}>Go Back to Homepage!</Link>
        </div>
     );
}
 
export default Error404;