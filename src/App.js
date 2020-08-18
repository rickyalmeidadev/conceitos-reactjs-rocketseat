import React, { useState } from 'react';

import Header from './components/Header';

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
