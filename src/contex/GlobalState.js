import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


// INITIAL STATE
const initialState = {
    transactions: [
        { id: 1, name: 'Bag', amount: -20 },
        { id: 2, name: 'Alawee', amount: 33000 },
        { id: 3, name: 'Book', amount: -15 },
        { id: 4, name: 'Gig', amount: 2000 },
    ]
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState)


// PROVIDER COMPONENT
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions
         }}>
            {children}
        </GlobalContext.Provider>
    );
}