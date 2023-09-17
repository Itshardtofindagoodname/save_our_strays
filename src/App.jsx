import "./App.css";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <ParallaxProvider>
        <div className="flex flex-col">
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/content" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ParallaxProvider>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
}

export default App;
