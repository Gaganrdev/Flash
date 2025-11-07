import './App.css';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </Router>
);
}

export default App;
