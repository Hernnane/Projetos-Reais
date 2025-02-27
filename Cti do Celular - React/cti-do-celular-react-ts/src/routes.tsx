import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Pages/Home';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='*' element={<h2>Pô, não tem essa página não!</h2>} />
            </Routes>
        </BrowserRouter>
    )
};