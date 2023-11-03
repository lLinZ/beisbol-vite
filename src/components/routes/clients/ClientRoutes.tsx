import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage, GamesPage, PlayersPage, ProfilePage } from '../../../pages/client';

export const ClientRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/games' element={<GamesPage />} />
            <Route path='/players' element={<PlayersPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}
