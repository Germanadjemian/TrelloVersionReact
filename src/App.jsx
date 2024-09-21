import { createContext, useState } from 'react'
import { Title } from './Title';
//import './App.css'

const TaskArray = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskArray.Provider value={[tasks, setTasks]} >
        <Title />




      </TaskArray.Provider>
    </>
  )
}

export default App;
