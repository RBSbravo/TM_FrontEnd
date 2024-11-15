import { useState } from 'react';


function TaskHistory() {
  const [filter, setFilter] = useState('all');

  const tasks = [
    {
      id: 1,
      title: 'TAPOS NA',
      description: 'TAPUSIN',
      startDate: '2023-01-01',
      dueDate: '2023-01-05',
      status: 'done',
    },
    {
      id: 2,
      title: 'HINDI NATAPOS',
      description: 'TINAMAD',
      startDate: '2023-01-10',
      dueDate: '2023-01-10',
      status: 'missed',
    },
  ];

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className="task-history-container">
      <h1>Task History</h1>
      <p>Here you can view all the tasks you have completed. Stay on top of your productivity and review your past accomplishments.</p>
      <div className="filter-container">
        <label htmlFor="status-filter">Filter by status: </label>
        <select id="status-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="missed">Missed</option>
        </select>
      </div>
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.startDate}</td>
                  <td>{task.dueDate}</td>
                  <td className={task.status}>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default TaskHistory;
