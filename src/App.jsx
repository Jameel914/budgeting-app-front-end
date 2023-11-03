import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexPage from "./Components/IndexPage";
import ShowPage from "./Components/ShowPage";
import EditPage from "./Components/EditPage";
import NewPage from "./Components/NewPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/transaction" element={<IndexPage />} />
        <Route path="/transaction/:id" element={<ShowPage />} />
        <Route path="/transaction/:id/edit" element={<EditPage />} />
        <Route path="/transaction/new" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
