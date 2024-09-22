import { useContext } from 'react'
import { ModalActiveContext } from './ModalActiveContext';
import "./Modal.css"

function Footer() {
    return (
        <footer className="modal-card-foot">
            <div className="buttons">
                <button className="button" id="cancel-button">Cancelar</button>
                <button className="button is-success" id="save-button">Aceptar</button>
            </div>
        </footer>
    );
}

function InputTitle() {
    return (
        <div className="field">
            <label className="label">Título</label>
            <div className="control">
                <input className="input" type="text" id="titulo" placeholder="Título de la tarea" />
            </div>
        </div>
    );
}

function InputDescription() {
    return (
        <div className="field">
            <label className="label">Descripción</label>
            <div className="control">
                <input className="textarea" id="descripcion" placeholder="Descripción de la tarea"
                    maxLength="150" />
            </div>
            <p className="help">
                <span id="char-count">150</span> caracteres máximo.
            </p>
        </div>
    );

}

function AssignTo() {
    return (
        <div className="field">
            <label className="label">Asignado</label>
            <div className="control">
                <div className="select">
                    <select id="asignado">
                        <option value="">Asigne una persona</option>
                        <option value="María">María</option>
                        <option value="Ezequiel">Ezequiel</option>
                        <option value="Bruno">Bruno</option>
                        <option value="German">Germán</option>
                        <option value="Rodrigo Lujambio">Rodrigo Lujambio</option>
                        <option value="Michel Sampil">Michel Sampil</option>
                        <option value="Jose Abadie">Jose Abadie</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function SetPriority() {
    return (
        <div className="field">
            <label className="label">Prioridad</label>
            <div className="control">
                <div className="select">
                    <select id="prioridad">
                        <option value="">Seleccione una Prioridad</option>
                        <option value="Low">Baja</option>
                        <option value="Medium">Media</option>
                        <option value="High">Alta</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function SetStatus() {
    return (
        <div className="field">
            <label className="label">Estado</label>
            <div className="control">
                <div className="select">
                    <select name="status" required id="estado">
                        <option value="">Seleccione un Estado</option>
                        <option value="Backlog">Backlog</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function SetDate() {
    return (
        <div className="field">
            <label className="label">Fecha límite</label>
            <div className="control">
                <input className="input" id="fecha_limite" type="date" />
            </div>
        </div>
    );
}

function BuildBody() {
    return (
        <section className="modal-card-body">
            <form id="task-form">
                <InputTitle></InputTitle>
                <InputDescription></InputDescription>
                <AssignTo></AssignTo>
                <SetPriority></SetPriority>
                <SetStatus></SetStatus>
                <SetDate></SetDate>
            </form>
        </section>
    );
}

function Modal() {
    const modalmanager = useContext(ModalActiveContext);

    if (!modalmanager.is_active)
        return null;

    return (
        <div className="modal is-active" id="task-menu" tabIndex="0">
            <div className="modal-background" id="background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title"></p>
                </header>
                <BuildBody></BuildBody>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Modal;
