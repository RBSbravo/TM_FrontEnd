import  { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root'); // For accessibility

const AddTaskModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, startDate, endDate };
    // Handle task submission logic here
    console.log('Task submitted:', task);
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Task"
      className="modal"
    >
      <button type="button" className="close-button" onClick={onRequestClose}>×</button>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Task Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <div className="modal-buttons">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
