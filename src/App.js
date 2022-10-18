import { Scene } from "./components/Scene";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddSushi from "./pages/AddSushi";
import Preloader from "./pages/Preloader";
import AboutSushi from "./pages/AboutSushi";
import Test from "./components/SushiInfo";
import Search from "./pages/Search";

function App() {
  const [cube, setCube] = useState("green");

  return (
    <>
      <Preloader />
      <main className="main">
        <Scene cube={cube} />
        <div className="overlay">
          <Test />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home setCube={setCube} />} />
              <Route
                path="/addSushi"
                element={<AddSushi setCube={setCube} />}
              />
              <Route
                path="/editSushi/:id"
                element={<AddSushi setCube={setCube} />}
              />
              <Route
                path="/aboutSushi/:id"
                element={<AboutSushi setCube={setCube} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
