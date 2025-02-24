// Simulate API calls for projects
export const fetchProjects = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Project 1', description: 'First project', status: 'In Progress', deadline: '2023-12-31' },
          { id: 2, name: 'Project 2', description: 'Second project', status: 'Completed', deadline: '2023-11-15' },
        ]);
      }, 1000);
    });
  };
  
  export const createProject = async (project) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...project, id: Math.floor(Math.random() * 100) });
      }, 1000);
    });
  };