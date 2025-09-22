import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
