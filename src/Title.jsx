export function Title() {
    return (
        <>
            <header >
                <h1 >Gestor de tareas</h1>
            </header>
            <div >
                <button id="theme_switcher_btn">
                    <span className="material-symbols-outlined">dark_mode</span>
                </button>
                <button id="add_task_btn">
                    <span className="material-symbols-outlined">add_task</span>
                </button>
            </div>
        </>
    );
};