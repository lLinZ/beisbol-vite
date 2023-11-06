import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { AdminRoutes } from './components/routes/admin';
import { ClientRoutes } from './components/routes/clients';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <AdminRoutes />
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;