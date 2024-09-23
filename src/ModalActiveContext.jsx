import { createContext, useState } from "react";

export const ModalActiveContext = createContext();

export function ModalManager({ children }) {
    const [is_active, setActive] = useState(false);

    const [placeholder_task, setPlaceholderTask] = useState({
        id: "",
        title: "",
        description: "",
        assignedTo: "",
        startDate: "",
        endDate: "",
        status: "",
        priority: "",
        comments: [],
    });

    const manager = {
        is_active,
        setActive,
        placeholder_task,
        setPlaceholderTask,
    }

    return (
        <ModalActiveContext.Provider value={manager} >
            {children}
        </ModalActiveContext.Provider>
    );
}
