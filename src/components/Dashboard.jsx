
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from "./Header";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to login page
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="account">Account</Link></li>
              <li><Link to="task-list">TaskList</Link></li>
              <li><Link to="task-history">TaskHistory</Link></li>
              <li><Link to="google-calendar">Calendar</Link></li>
              <li><button className="logout-button" onClick={handleLogout}>Log Out</button></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
