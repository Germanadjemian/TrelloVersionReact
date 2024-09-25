import { Title } from './Title';
import Dashboard from './Dashboard';
import { TasksManager } from './Contexts/TasksContext';
import Modal from './Modal';
import { ModalManager } from './Contexts/ModalActiveContext';

function App() {
  return (
    <>
      <ModalManager>
        <Title />
        <TasksManager>
          <Dashboard></Dashboard>
          <Modal></Modal>
        </TasksManager>
      </ModalManager>
    </>
  )
}

export default App;
