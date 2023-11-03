import { FC } from 'react'
import { Layout } from '../components/layout'
import { Link } from '@mui/material'

export const HomePage: FC = () => {
    return (<Layout>
        <Link href='/login'>Login</Link>
    </Layout>
    )
}
