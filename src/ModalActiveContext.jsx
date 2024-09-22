import { createContext, useState } from "react";

export const ModalActiveContext = createContext();

export function ModalManager({ children }) {
    const [is_active, setActive] = useState(false);

    const manager = {
        is_active,
        setActive,
    }

    return (
        <ModalActiveContext.Provider value={manager} >
            {children}
        </ModalActiveContext.Provider>
    );
}