import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/MyContext';
import Home from './pages/Home';
import Folder from './pages/Folder';

export default function MyRoutes() {
    return (
        <ContextProvider>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Folder />} />
            </Routes>
        </ContextProvider>
    )
};
