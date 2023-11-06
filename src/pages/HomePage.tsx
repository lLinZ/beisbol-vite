import { FC, useContext } from 'react'
import { Layout } from '../components/layout'
import { Link } from '@mui/material'
import { AuthContext } from '../context/auth'

export const HomePage: FC = () => {
    const { authState } = useContext(AuthContext);
    console.log(authState)
    return (<Layout>
        <Link href='/login'>Login</Link>
    </Layout>
    )
}
