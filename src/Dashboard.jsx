import { createContext, useContext, useEffect } from "react";
import "./Dashboard.css"
import Card from "./Card";
import { TasksContext } from "./TasksContext";

function DashboardColumn({ name, children }) {
    return (
        <div className="custom-column" id={name}>
            <h2 className="subtitle is-3">{name}</h2>
            <div className="inner-column">
                {children}
            </div>
        </div>
    );
}

function Dashboard() {
    const manager = useContext(TasksContext);

    // Recuperamos las tareas
    useEffect(() => {
        async function fetcher() {
            await manager.getTasks();
        }

        fetcher();

        // Habrá que meter un return o no queda nada para limpiar?
    }, []);

    const column_categories = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];
    return (
        <div className="dashboard">
            {column_categories.map((columncat, id) => {
                return (
                    <DashboardColumn name={columncat} key={id}>
                        {manager.tasks.map(task => {
                            if (task.status === columncat)
                                return <Card task={task} key={task.id} />
                        })}
                    </DashboardColumn>
                );
            })}
        </div>
    );
}

export default Dashboard;