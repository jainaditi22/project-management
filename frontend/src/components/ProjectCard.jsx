import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      <p>Deadline: {project.deadline}</p>
    </div>
  );
};

export default ProjectCard;