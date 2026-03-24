import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MimoCase from "./pages/mimo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mimo" element={<MimoCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
