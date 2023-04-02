import "./App.css";

import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import DarkMode from "./components/DarkMode";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const modetoggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#35015d";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Vipul Rajput"
          about="Time"
          mode={mode}
          toggle={modetoggle}
        />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/" element={<TextForm
                heading="Enter your text to analyze"
                mode={mode}
                toggle={modetoggle}
                alert={showAlert}
              />}></Route>
              <Route exact path="/About" element={<DarkMode></DarkMode>}></Route>
              <Route exact path="/Time" element ={<Timer />}></Route>
          </Routes>
          {/* <Switch>
            <Route path="/about">
              <DarkMode></DarkMode>
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter your text to analyze"
                mode={mode}
                toggle={modetoggle}
                alert={showAlert}
              />
            </Route>
          </Switch> */}
          {/* <div className="container my-2"><h5>Here we are implementing Dark mode</h5></div> */}
        </div>
      </Router>
    </>
  );
}

export default App;
