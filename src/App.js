import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <div className="container">
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
