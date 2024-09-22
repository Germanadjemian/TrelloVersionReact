import { createContext, useState } from 'react'
import { Title } from './Title';
import Dashboard from './Dashboard';
import { TasksManager } from './TasksContext';
//import './App.css'

function App() {
  return (
    <>
      <Title />
      <TasksManager>
        <Dashboard></Dashboard>
      </TasksManager>





    </>
  )
}

export default App;
