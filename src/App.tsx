import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Music } from "./components/Music";
import { Art } from "./components/Art";
import { Notfound } from "./components/Notfound";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
    <div className="h-full">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
