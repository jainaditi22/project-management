import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../services/projectService';
import { fetchTasks } from '../services/taskService';
import { fetchUsers } from '../services/userService';
import TaskItem from '../components/TaskItem';

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch project details
    fetchProjects().then((projects) => {
      const foundProject = projects.find((p) => p.id === parseInt(projectId));
      setProject(foundProject);
    });

    // Fetch tasks for the project
    fetchTasks().then((tasks) => {
      const projectTasks = tasks.filter((task) => task.projectId === parseInt(projectId));
      setTasks(projectTasks);
    });

    // Fetch team members (simulate fetching users)
    fetchUsers().then((users) => {
      setTeamMembers(users);
    });
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Deadline:</strong> {project.deadline}</p>

      <h3>Tasks</h3>
      <div className="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found for this project.</p>
        )}
      </div>

      <h3>Team Members</h3>
      <div className="team-members">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <p><strong>{member.name}</strong> ({member.role})</p>
              <p>{member.email}</p>
            </div>
          ))
        ) : (
          <p>No team members assigned.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;