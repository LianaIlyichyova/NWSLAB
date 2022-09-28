import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import ControlPanel from "./components/control-panel/control-panel";
import CatsPage from "./components/cats-page/cats-page";

function App() {
  return (
    <BrowserRouter>
      <ControlPanel />
      <Routes>
        <Route exact path="/cats/:name" element={<CatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
