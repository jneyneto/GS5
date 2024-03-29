import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/MyContext';
import Home from './pages/Home';

export default function MyRoutes() {
    return (
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </ContextProvider>
    )
};
