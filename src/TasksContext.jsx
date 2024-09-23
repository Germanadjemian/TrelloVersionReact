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
        },

        async addTask(task) {
            const response = await fetch(this.url, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const status = `dashboard.addTask(): ${response.status}, ${response.statusText}`;
            console.log(status);

            if (!response.ok)
                return;

            // Descarto lo que acabo de crear y uso lo que me devuelve el sv
            const res_json = await response.json();
            this.setTasks(tasks.concat([res_json]));
        },

        async editTask(task) {
            const id = task.id;
            const url = `${this.url}/${id}`;

            console.log(id)
            const response = await fetch(url, {
                method: "PUT",
                params: id,
                body: JSON.stringify(task),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const status = `dashboard.editTask(): ${response.status}, ${response.statusText}`;
            console.log(status);

            if (!response.ok)
                return;

            const res_json = await response.json();
            this.setTasks(this.tasks.filter(keep => keep.id !== task.id).concat([res_json]));
        },
    }

    return (
        <TasksContext.Provider value={manager} >
            {children}
        </TasksContext.Provider>
    );

}
