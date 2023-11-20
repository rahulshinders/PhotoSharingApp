import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./screens/Home/HomePage";
import PostPage from "./screens/Post/PostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg">
          <header className="hd-bg">
            <div className="hd-1">
              <nav className="nav-l">

              </nav>
              <div className="bg-sub">
                <Link className="submit" to={"/submit"}>
                  <img
                    className="sub-img"
                    src={require("./assets/images/submit.png")}
                    alt="submit"
                  />
                  Submit
                </Link>
              </div>
            </div>
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/submit" element={<PostPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
