// import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3 ">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
            
          </Route>

          <Route exact path="/" element={<TextForm
              showAlert={showAlert}
              heading="Enter the text"
              mode={mode}
            />}>
            
          </Route>
        </Routes>
        
      </div>
      </Router>
      
    </>
  );
}

export default App;
