import { useContext, useEffect } from "react";
import { SvUrl, TaskArray } from "./App"
import "./Dashboard.css"
import Card from "./Card";

async function getTasks(url) {
    const response = await fetch(url);
    const tasks = await response.json();

    const status = `Dashboard.jsx - getTasks(): ${response.status}, ${response.statusText}`;
    console.log(status);

    if (!response.ok)
        return;

    return tasks;
}

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
    const url = useContext(SvUrl);
    const Tasks = useContext(TaskArray);

    // Recuperamos las tareas
    useEffect(() => {
        async function fetcher() {
            const tasks = await getTasks(url);
            Tasks[1](tasks);
        }

        fetcher();

        // Habrá que meter un return?
    }, []);

    const column_categories = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];
    return (
        <div className="dashboard">
            {column_categories.map((columncat, id) => {
                return (
                    <DashboardColumn name={columncat} key={id}>
                        {Tasks[0].map((task, id) => {
                            if (task.status === columncat)
                                return <Card task={task} key={id} />
                        })}
                    </DashboardColumn>
                );
            })}
        </div>
    );
}

export default Dashboard;