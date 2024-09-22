import { Title } from './Title';
import Dashboard from './Dashboard';
import { TasksManager } from './TasksContext';
import Modal from './Modal';
import { ModalManager } from './ModalActiveContext';

function App() {
  return (
    <>
      <ModalManager>
        <Title />
        <TasksManager>
          <Dashboard></Dashboard>
        </TasksManager>
        <Modal></Modal>
      </ModalManager>
    </>
  )
}

export default App;
