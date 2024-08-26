import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';    
import StartQuiz from './pages/StartQuiz';
import Apply from './pages/Apply';
import JoinTeam from './components/JoinTeam';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/start-quiz" element={<StartQuiz />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;