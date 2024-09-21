import { createContext, useState } from 'react'
import { Title } from './Title';
import Dashboard from './Dashboard';
//import './App.css'

export const TaskArray = createContext();
export const SvUrl = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const url = "http://localhost:3000/api/tasks";

  return (
    <>
      <SvUrl.Provider value={url}>
        <TaskArray.Provider value={[tasks, setTasks]} >
          <Title />
          <Dashboard></Dashboard>




        </TaskArray.Provider>
      </SvUrl.Provider>

    </>
  )
}

export default App;
