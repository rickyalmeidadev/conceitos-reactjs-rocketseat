import React, { useState } from 'react';

import Header from './components/Header';

import img from './assets/img.jpeg'

const App = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
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
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
};

export default App;
