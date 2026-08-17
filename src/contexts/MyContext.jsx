export const MyContext = createContext();

export function ContextProvider(props) {
    return (
        <MyContext.Provider>
            {props.children}
        </MyContext.Provider>
    )
};
