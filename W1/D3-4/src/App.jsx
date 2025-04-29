import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Blog Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<PostDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
