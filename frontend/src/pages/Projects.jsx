import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '', status: '', deadline: '' });

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data));
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const createdProject = await createProject(newProject);
    setProjects([...projects, createdProject]);
    setIsModalOpen(false);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <button onClick={() => setIsModalOpen(true)}>Create Project</button>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects-list">
        {projects.map((project) => (
       <Link key={project.id} to={`/projects/${project.id}`}>
         <ProjectCard project={project} />
       </Link>
     ))}
     </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleCreateProject}>
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Status"
            value={newProject.status}
            onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
          />
          <input
            type="date"
            placeholder="Deadline"
            value={newProject.deadline}
            onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
          />
          <button type="submit">Create</button>
        </form>
      </Modal>
    </div>
  );
};

export default Projects;