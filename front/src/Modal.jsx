import { useContext } from 'react'
import { ModalActiveContext } from './Contexts/ModalActiveContext';
import { TasksContext } from './Contexts/TasksContext';
import "./Modal.css"

function Footer({ onAccept, reset }) {
    const modalmanager = useContext(ModalActiveContext);
    function sendAndClose() {
        if (onAccept()) {
            reset();
            modalmanager.setActive(false);
        }
    }

    return (
        <footer className="modal-card-foot">
            <div className="buttons">
                <button
                    className="button"
                    id="cancel-button"
                    onClick={() => {
                        modalmanager.setActive(false)
                        reset();
                    }}
                >Cancelar</button>
                <button
                    className="button is-success"
                    id="save-button"
                    onClick={sendAndClose}
                >Aceptar</button>
            </div>
        </footer>
    );
}

function InputTitle({ setPlaceholder, placeholder }) {
    function handleChange(event) {
        setPlaceholder("title", event.target.value);
    }

    return (
        <div className="field">
            <label className="label">Título</label>
            <div className="control">
                <input
                    className="input"
                    type="text"
                    id="titulo"
                    placeholder="Título de la tarea"
                    onChange={handleChange}
                    value={placeholder} />
            </div>
        </div>
    );
}

function InputDescription({ setPlaceholder, placeholder }) {
    function handleChange(event) {
        setPlaceholder("description", event.target.value);
    }

    return (
        <div className="field">
            <label className="label">Descripción</label>
            <div className="control">
                <textarea
                    className="textarea"
                    id="descripcion"
                    placeholder="Descripción de la tarea"
                    maxLength="150"
                    onChange={handleChange}
                    value={placeholder} />
            </div>
            <p className="help">
                <span id="char-count">150</span> caracteres máximo.
            </p>
        </div>
    );

}

function DropdownComponent({ titulo, descripcion, opciones, propiedad, setPlaceholder, placeholder }) {
    function handleChange(event) {
        setPlaceholder(propiedad, event.target.value);
    }

    return (
        <div className="field">
            <label className="label">{titulo}</label>
            <div className="control">
                <div className="select">
                    <select
                        name={propiedad}
                        required id={titulo.toLowerCase()}
                        onChange={handleChange}
                        value={placeholder} >
                        <option value="">{descripcion}</option>
                        {opciones.map((opcion, idx) => {
                            return <option key={idx} value={opcion}>{opcion}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    );

}

function SetDate({ setPlaceholder, placeholder }) {
    function handleChange(event) {
        setPlaceholder("endDate", event.target.value);
    }

    return (
        <div className="field">
            <label className="label">Fecha límite</label>
            <div className="control">
                <input
                    className="input"
                    id="fecha_limite"
                    type="date"
                    onChange={handleChange}
                    value={placeholder} />
            </div>
        </div>
    );
}

function Modal() {
    const modalmanager = useContext(ModalActiveContext);
    const taskmanager = useContext(TasksContext);

    if (!modalmanager.is_active)
        return null;

    let isNewTask = true;
    let headerTitle = "Agregar tarea";
    if (modalmanager.placeholder_task.id !== "") {
        isNewTask = false;
        headerTitle = "Editar tarea";
    };

    function setPlaceholderField(name, value) {
        modalmanager.setPlaceholderTask({
            ...modalmanager.placeholder_task,
            [name]: value,
        })
    };

    function resetPlaceholder() {
        modalmanager.setPlaceholderTask({
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
    };

    function ArmarYMandarJSON() {
        let isFilled = true;
        Object.entries(modalmanager.placeholder_task).forEach(propiedad => {
            if (propiedad[0] !== "id" && propiedad[0] !== "startDate" && propiedad[1] === "")
                isFilled = false;
        })

        if (isFilled) {
            if (isNewTask)
                taskmanager.addTask(modalmanager.placeholder_task);
            else
                taskmanager.editTask(modalmanager.placeholder_task);

            return true;
        } else {
            alert("Quedan campos vacíos.");
            return false;
        }
    };

    const personas = ["María", "Ezequiel", "Bruno", "German", "Rodrigo Lujambio", "Michel Sampil", "Jose Abadie"];
    const prioridades = ["Low", "Medium", "High"];
    const column_categories = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];

    return (
        <div className="modal is-active" id="task-menu" tabIndex="0">
            <div
                className="modal-background"
                id="background"
                onClick={() => {
                    modalmanager.setActive(false)
                    resetPlaceholder();
                }}
            ></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{headerTitle}</p>
                </header>
                <section className="modal-card-body">
                    <form id="task-form">
                        <InputTitle
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.title}
                        ></InputTitle>
                        <InputDescription
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.description}
                        ></InputDescription>

                        <DropdownComponent
                            titulo={"Asignado"}
                            descripcion={"Elegir asignado..."}
                            opciones={personas}
                            propiedad={"assignedTo"}
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.assignedTo}
                        ></DropdownComponent>
                        <DropdownComponent
                            titulo={"Prioridad"}
                            descripcion={"Seleccionar prioridad..."}
                            opciones={prioridades}
                            propiedad={"priority"}
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.priority}
                        ></DropdownComponent>
                        <DropdownComponent
                            titulo={"Estado"}
                            descripcion={"Seleccionar estado..."}
                            opciones={column_categories}
                            propiedad={"status"}
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.status}
                        ></DropdownComponent>

                        <SetDate
                            setPlaceholder={setPlaceholderField}
                            placeholder={modalmanager.placeholder_task.endDate}
                        ></SetDate>
                    </form>
                </section>
                <Footer onAccept={ArmarYMandarJSON} reset={resetPlaceholder}></Footer>
            </div>
        </div>
    );
}

export default Modal;
