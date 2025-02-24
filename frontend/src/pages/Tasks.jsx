import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask } from '../services/taskService';
import TaskItem from '../components/TaskItem';
import Modal from '../components/Modal';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', status: '', priority: '', dueDate: '' });

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const createdTask = await createTask(newTask);
    setTasks([...tasks, createdTask]);
    setIsModalOpen(false);
  };

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <button onClick={() => setIsModalOpen(true)}>Create Task</button>
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Status"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          />
          <input
            type="text"
            placeholder="Priority"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          />
          <input
            type="date"
            placeholder="Due Date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          />
          <button type="submit">Create</button>
        </form>
      </Modal>
    </div>
  );
};

export default Tasks;