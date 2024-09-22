import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksManager({ children }) {
    const [tasks, setTasks] = useState([]);

    // Será muy chancho?
    const manager = {
        tasks,
        setTasks,

        url: "http://localhost:3000/api/tasks",

        async getTasks() {
            const response = await fetch(this.url);
            const tasks = await response.json();

            const status = `Dashboard.jsx - getTasks(): ${response.status}, ${response.statusText}`;
            console.log(status);

            if (!response.ok)
                return;

            this.setTasks(tasks);
        },

        async deleteTask(task) {
            const id = task.id;
            const url = `${this.url}/${id}`;

            if (this.tasks.includes(task)) {
                const response = await fetch(url, {
                    method: "DELETE",
                    params: id,
                    headers: {
                        "Content-Type": "text/xml",
                    },
                });

                const status = `dashboard.deleteTask(): ${response.status}, ${response.statusText}`;
                console.log(status);

                if (!response.ok)
                    return;

                this.setTasks(this.tasks.filter(keep => keep !== task)); // sacamos del array
            }
        },
    }

    return (
        <TasksContext.Provider value={manager} >
            {children}
        </TasksContext.Provider>
    );

}