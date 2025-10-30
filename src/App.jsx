import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/archive" element={<h1>Archieve </h1>} />
        <Route path="/" element={<Home />} />
        {/*<Route path="/archive" element={<Archive />} /> */}
      </Routes>
    </>
  );
}

export default App;
