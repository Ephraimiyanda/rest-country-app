import { createContext } from 'react';
export const CountryContext = createContext();

export const  CountryProvider = ({children})=>{ 

    return(
        <CountryContext.Provider>
            {children}
        </CountryContext.Provider>
    )
}