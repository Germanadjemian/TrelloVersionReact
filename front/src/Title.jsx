import { useContext, useEffect } from "react";
import { ModalActiveContext } from "./ModalActiveContext";

export function Title() {
    const modalmanager = useContext(ModalActiveContext);

    useEffect(() => {
        const theme_switch_button = document.getElementById("theme_switcher_btn"); // ID corregido
        const toggleTheme = () => {
            // Cambiar tema en el HTML
            document.getElementsByTagName("html")[0].classList.toggle("theme-dark");

            // Cambiar el ícono del botón
            const iconSpan = theme_switch_button.querySelector("span");
            const icon = iconSpan.innerText;
            iconSpan.innerText = (icon === "dark_mode") ? "light_mode" : "dark_mode";
        };

        theme_switch_button.addEventListener("click", toggleTheme);

        // Limpiar el event listener al desmontar
        return () => {
            theme_switch_button.removeEventListener("click", toggleTheme);
        };
    }, []); // Array vacío para que el efecto se ejecute solo cuando el componente se monta

    return (
        <>
            <header className="block is-flex is-justify-content-center is-align-items-center">
                <h1 className="title is-1">Gestor de tareas</h1>
            </header>
            <div className="block is-flex is-flex-direction-row is-justify-content-flex-end">
                <button className="button is-small" id="theme_switcher_btn">
                    <span className="material-symbols-outlined">dark_mode</span>
                </button>
                <button className="button is-small" id="add_task_btn" onClick={() => modalmanager.setActive(true)}>
                    <span className="material-symbols-outlined">add_task</span>
                </button>
            </div>
        </>
    );
}
