// Simulate API calls for tasks
export const fetchTasks = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Task 1', status: 'Pending', priority: 'High', dueDate: '2023-10-30' },
          { id: 2, title: 'Task 2', status: 'Completed', priority: 'Medium', dueDate: '2023-11-05' },
        ]);
      }, 1000);
    });
  };
  
  export const createTask = async (task) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...task, id: Math.floor(Math.random() * 100) });
      }, 1000);
    });
  };