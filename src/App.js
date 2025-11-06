import './App.css';
import Home from './components/Home';
import Tasks from './components/Tasks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </Router>
);
}

export default App;
