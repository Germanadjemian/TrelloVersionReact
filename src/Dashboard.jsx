import { useContext, useEffect } from "react";
import { SvUrl, TaskArray } from "./App"

async function getTasks(url) {
    const response = await fetch(url);
    const tasks = await response.json();

    const status = `Dashboard.jsx - getTasks(): ${response.status}, ${response.statusText}`;
    console.log(status);

    if (!response.ok)
        return;

    return tasks;
}

function DashboardColumn({ name }) {
    return (
        <div id={name}>
            <h2>{name}</h2>
            <div className="inner-column"></div>
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

    return (
        <>
            <DashboardColumn name="Backlog"></DashboardColumn>
            <DashboardColumn name="To Do"></DashboardColumn>
            <DashboardColumn name="In Progress"></DashboardColumn>
            <DashboardColumn name="Blocked"></DashboardColumn>
            <DashboardColumn name="Done"></DashboardColumn>
        </>
    );
}

export default Dashboard;