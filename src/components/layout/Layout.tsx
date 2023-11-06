import { FC, useContext, useEffect } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Footer } from './footer';
import { NavBar } from './nav';
import { AuthContext } from '../../context/auth';
type Props = {
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    const { authState, validateToken } = useContext(AuthContext);
    useEffect(() => {
        validateToken().then((result) => {
            if (!result.status) {
                window.location.href = '/'
            }
        })
    }, [])
    return (
        <Box>
            <NavBar />
            <Box sx={styles.body}>
                <Toolbar />
                {children}
            </Box>
            <Footer />
        </Box>
    )
}
const styles = {
    body: {
        width: { xs: '100%', sm: '90%', md: '80%' },
        margin: 'auto',
        minHeight: '100vh',
        maxheight: '100%',
    }
}