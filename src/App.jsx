
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import TaskList from './components/content/TaskList';
import TaskHistory from './components/content/TaskHistory';
import Calendar from './components/content/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="task-list" element={<TaskList />} />
          <Route path="task-history" element={<TaskHistory />} />
          <Route path="google-calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
