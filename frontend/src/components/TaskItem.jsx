import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h4>{task.title}</h4>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
};

export default TaskItem;