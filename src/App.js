import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link exact to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link exact to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link exact to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
