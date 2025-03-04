import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { ScrollToTop } from './hooks/ScrollTop';

import { NavBar } from './components/common/NavBar';
import { LandingPage } from './components/pages/LandingPage';
import { Footer } from './components/common/Footer';

const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

const routes = [
    { path: '/', id: 1, element: <LandingPage /> },
    { path: '/politica-privacidad', id: 2, element: <PoliticasPage /> },
    { path: '*', id: 3, element: <ErrorPage /> },
];

function App() {
    return (
        <BrowserRouter basename="/proconsultores-1-1.0">
            <ScrollToTop />
            <NavBar />

            <Routes>
                {routes.map(({ path, element, id }) => (
                    <Route key={id} path={path} element={<Suspense fallback={<div>Cargando...</div>}>{element}</Suspense>} />
                ))}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
