function CardHeader({ title }) {
    return (
        <header className="card-header">
            <p className="card-header-title">{title}</p>
            <div className="card-header-icon">
                <button className="delete"></button>
            </div>
        </header>
    );
}

function CardBody({ description, assignedTo, priority }) {
    return (
        <div className="card-content">
            <div className="content">{description}</div>
            <div className="tags">
                <span className="tag is info is-light is-medium">
                    <span className="material-symbols-outlined">schedule</span>
                    21/09/2024
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
            <CardHeader title={task.title}></CardHeader>
            <CardBody
                description={task.description}
                assignedTo={task.assignedTo}
                priority={task.priority}
            ></CardBody>
        </div>
    );
}

export default Card;