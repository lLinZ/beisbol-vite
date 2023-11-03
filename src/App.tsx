import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { AdminRoutes } from './components/routes/admin';
import { ClientRoutes } from './components/routes/clients';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './common';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <AdminRoutes />
        <ClientRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;