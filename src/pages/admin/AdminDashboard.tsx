import { FC } from 'react'
import { Layout } from '../../components/layout'
import { DescripcionDeVista } from '../../components/layout/content'

export const AdminDashboard: FC = () => {
    return (
        <Layout>
            <DescripcionDeVista title={'Pagina principal'} description={'Bienvenido, elige una de las opciones para interactuar con el sistema ¿Que deseas hacer?'} />
        </Layout>
    )
}
