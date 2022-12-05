import "./App.css";
import ReactNavbar from "./Components/Layout/ReactNavbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <ReactNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
