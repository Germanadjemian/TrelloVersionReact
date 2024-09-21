export function Title() {
    return (
        <>
            <header className="block is-flex is-justify-content-center is-align-items-center">
                <h1 className="title is-1">Gestor de tareas</h1>
            </header>
            <div className="block is-flex is-flex-direction-row is-justify-content-flex-end">
                <button className="button is-small" id="theme_switcher_btn">
                    <span className="material-symbols-outlined">dark_mode</span>
                </button>
                <button className="button is-small" id="add_task_btn">
                    <span className="material-symbols-outlined">add_task</span>
                </button>
            </div>
        </>
    );
};