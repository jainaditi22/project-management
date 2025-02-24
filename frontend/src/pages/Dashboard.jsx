import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;