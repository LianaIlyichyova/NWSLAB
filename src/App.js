import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import ControlPanel from "./components/control-panel/control-panel";
import Cats from "./components/cats/cats";

function App() {
  return (
    <BrowserRouter>
      <ControlPanel />
      <Routes>
        <Route exact path="/cats/:name" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
