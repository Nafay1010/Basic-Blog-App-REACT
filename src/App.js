import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar'
import AddBlog from './AddBlog'
import Error404 from './Error404'
import BlogDetais from './BlogDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Content">  
          <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
          <Route
            path="/create"
            element={<AddBlog/>}
          />
          <Route
            path="/blogs/:id"
            element={<BlogDetais/>}
          />
          <Route
            path="*"
            element={<Error404/>}
          />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
