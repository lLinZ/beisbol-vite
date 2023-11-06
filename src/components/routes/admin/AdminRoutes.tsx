import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPlayersPage } from '../../../pages/admin/players/AdminPlayersPage';
import { AdminGamesPage } from '../../../pages/admin/games/AdminGamesPage';
import { AdminStatsPage } from '../../../pages/admin/stats/AdminStatsPage';
import { AdminUsersPage } from '../../../pages/admin/users/AdminUsersPage';
import { AdminDashboard } from '../../../pages/admin/AdminDashboard';

export const AdminRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/players' element={<AdminPlayersPage />} />
            <Route path='/admin/games' element={<AdminGamesPage />} />
            <Route path='/admin/stats' element={<AdminStatsPage />} />
            <Route path='/admin/users' element={<AdminUsersPage />} />
        </Routes>
    )
}
