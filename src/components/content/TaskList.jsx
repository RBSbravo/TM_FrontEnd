import  { useState } from 'react';
import AddTaskModal from './AddTaskModal';


function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Example Task',
      description: 'This is a description of the example task.',
      startDate: '2023-01-01',
      dueDate: '2023-01-05',
      status: 'pending',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    console.log('Edit task with id:', id);
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: 'done' } : task)));
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <p>Here you can view all your pending tasks. Stay on top of your to-dos and manage your workload efficiently.</p>
      <button onClick={openModal} className="add-task-button">Add Task</button>
      <div className="task-items">
        {tasks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.startDate}</td>
                  <td>{task.dueDate}</td>
                  <td>
                    <button onClick={() => handleEdit(task.id)}>Edit</button>
                    <button onClick={() => handleRemove(task.id)}>Remove</button>
                    <button onClick={() => handleDone(task.id)}>Done</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
      <AddTaskModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default TaskList;
