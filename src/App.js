import logo from "./logo.svg";
import "./App.css";
import NewsLetter from "./components/newsLetter";
import Success from "./components/Success";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<NewsLetter />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
