import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage'
import { SchedulePage } from './pages/SchedulePage'
import { StandingsPage } from './pages/StandingsPage';
import { TeamPage } from './pages/TeamPage';
import { Routes, Route } from 'react-router';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="history" element={<HistoryPage />} />
      <Route path="schedule" element={<SchedulePage />} />
      <Route path="standings" element={<StandingsPage />} />
      <Route path="team" element={<TeamPage />} />
    </Routes>

  )
}

export default App
