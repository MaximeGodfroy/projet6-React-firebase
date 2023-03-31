import React, {createContext, useState} from 'react'

export const flatsListContext = createContext()

export const FlatsListProvider = ({ children }) => {
    const [flatsList, setFlatsList] = useState([]);
 
    return (
        <flatsListContext.Provider value={{ flatsList, setFlatsList }}>
            {children}
        </flatsListContext.Provider>
    )
}