import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import img from './assets/img.jpeg'

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    }).catch(console.error);
  }, []);

  const handleAddProject = () => {
    api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Ricky Almeida",
    }).then(response => {
      setProjects([...projects, response.data]);
    }).catch(console.error);
  };

  return (
    <>
      <Header title="Hello from React with props!">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Header>

      <img width={320} src={img} alt="Computer"/>


      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <small>{project.owner}</small>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
};

export default App;
