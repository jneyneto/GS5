import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyContext = createContext();

export function ContextProvider(props) {
    return (
        <MyContext.Provider>
            {props.children}
        </MyContext.Provider>
    )
};
