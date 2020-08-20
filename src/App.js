import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import img from './assets/img.jpeg'

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchProjectsError, setFetchProjectsError] = useState('');
  const [addProjectError, setAddProjectError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('projects');
        setProjects(response.data);
      } catch (error) {
        if (error.response) {
          setFetchProjectsError(error.response.data.message);
        } else {
          setFetchProjectsError('Falha ao obter projetos.');
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleAddProject = async () => {
    try {
      const response = await api.post('projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: 'Ricky Almeida',
      });

      setProjects([...projects, response.data]);
    } catch (error) {
      if (error.response) {
          setAddProjectError(error.response.data.message);
      } else {
        setAddProjectError('Falha ao adicionar projeto.');
      }

      setTimeout(() => {
        setAddProjectError('')
      }, 2500);
    }
  };

  return (
    <>
      <Header title='Hello from React with props!'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Header>

      <img width={320} src={img} alt='Computer'/>


      <ul>
        {isLoading ? (
          <p>Carregando...</p>
        ) : fetchProjectsError ? (
          <p>{fetchProjectsError}</p>
        ) : projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <small>{project.owner}</small>
          </li>
        ))}

      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
      {addProjectError && <p>{addProjectError}</p>}
    </>
  );
};

export default App;
