import { FC } from 'react'
import { Layout } from '../../components/layout'
import { DescripcionDeVista } from '../../components/layout/content'
import { Option } from '../../interfaces'
import SportsBaseball from '@mui/icons-material/SportsBaseball'
import Diversity2 from '@mui/icons-material/Diversity2'
import PriceCheck from '@mui/icons-material/PriceCheck'
import Groups from '@mui/icons-material/Groups'
import { green, blue, orange, pink } from '@mui/material/colors'
import { OptionsList } from '../../components/layout/options'

export const AdminDashboard: FC = () => {
    const clientOptions: Option[] = [
        { text: 'Jugadores', icon: <SportsBaseball/>, color: green[400], path: '/admin/players' },
        { text: 'Ligas', icon: <Diversity2/>, color: orange[400], path: '/admin/leagues' },
        { text: 'Equipos', icon: <Groups/>, color: pink[400], path: '/admin/teams' },
        { text: 'Pagos', icon: <PriceCheck/>, color: blue[400], path: '/admin/payments' },
    ]
    return (
        <Layout>
            <DescripcionDeVista title={'Pagina principal'} description={'Bienvenido, elige una de las opciones para interactuar con el sistema ¿Que deseas hacer?'} />
            <OptionsList options={clientOptions} breakpoints={{ xs: 6, sm: 6, md: 3, lg: 3 }} />
        </Layout>
    )
}
