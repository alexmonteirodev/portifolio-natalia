import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MimoCase from "./pages/mimo";
import MovaCase from "./pages/mova";
import LumioCase from "./pages/lumio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mimo" element={<MimoCase />} />
        <Route path="/mova" element={<MovaCase />} />
        <Route path="/lumio" element={<LumioCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
