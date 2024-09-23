import { useContext } from "react";
import { TasksContext } from "./TasksContext";
import { ModalActiveContext } from "./ModalActiveContext";
import "./Card.css"

function formatDate(date) {
    return date.toLocaleString("en-GB", { timeZone: "America/Montevideo" }).split(",")[0];
}

function CardHeader({ task }) {
    const manager = useContext(TasksContext);
    const modalmanager = useContext(ModalActiveContext)

    function spawnModal() {
        modalmanager.setPlaceholderTask({
            id: task.id,
            title: task.title,
            description: task.description,
            assignedTo: task.assignedTo,
            startDate: task.startDate,
            endDate:task.endDate,
            status: task.status,
            priority: task.priority,
        });

        modalmanager.setActive(true);
    }

    return (
        <header className="card-header">
            <p className="card-header-title">{task.title}</p>
            <div className="card-header-icon">
                <button className="edit" onClick={spawnModal}>
                    <span className="material-symbols-outlined">
                        edit_square
                    </span>
                </button>
            </div>
            <div className="card-header-icon">
                <button className="delete" onClick={() => manager.deleteTask(task)}></button>
            </div>
        </header>
    );
}

function CardBody({ description, assignedTo, priority, endDate }) {
    return (
        <div className="card-content">
            <div className="content">{description}</div>
            <div className="tags">
                <span className="tag is info is-light is-medium">
                    <span className="material-symbols-outlined">schedule</span>
                    {formatDate(endDate)}
                </span>
                <span className="tag is-info is-light is-medium">
                    <span className="material-symbols-outlined">account_circle</span>
                    {assignedTo}
                </span>
                <span className="tag is-light is-medium" id="prioridad">{priority}</span>
            </div>
        </div>
    );
}

function Card({ task }) {
    return (
        <div className="card">
            <CardHeader task={task}></CardHeader>
            <CardBody
                description={task.description}
                assignedTo={task.assignedTo}
                priority={task.priority}
                endDate={task.endDate}
            ></CardBody>
        </div>
    );
}

export default Card;
