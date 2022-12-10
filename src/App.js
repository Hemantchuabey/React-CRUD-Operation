import "./App.css";
import ReactNavbar from "./Components/Layout/ReactNavbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/Pages/NotFound";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";

function App() {
  return (
    <Router>
      <div className="App">
        <ReactNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
