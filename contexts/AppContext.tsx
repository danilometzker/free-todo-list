import AppScreen from "@/components/AppScreen";
import { NextComponentType, NextPageContext } from "next";
import React, { createContext, useContext, useState } from "react";

interface ContextType {
    setHeaderTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
    headerTitle: string | undefined;
}
const AppContext = createContext<ContextType | undefined>(undefined);

export default function AppProvider({ children }: any) {
    const [headerTitle, setHeaderTitle] = useState<string | undefined>();
    const values = {
        headerTitle,
        setHeaderTitle,
    };

    return (
        <AppScreen title={headerTitle}>
            <AppContext.Provider value={values}>{children}</AppContext.Provider>
        </AppScreen>
    );
}

export function useApp(): ContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp deve ser usado dentro de um AppProvider");
    }
    return context;
}
