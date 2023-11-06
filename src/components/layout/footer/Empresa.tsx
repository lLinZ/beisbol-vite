import Box from "@mui/material/Box"
import { TypographyCustom } from "../../custom"

/**
 * Componente con informacion de la empresa
 * @returns Informacion de la empresa
 */
export const Empresa = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src='/logo.png' alt='Logo Consolitex - Footer' width='150' height='150' />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TypographyCustom component='h5' variant='overline' fontSize={16} fontWeight='bold'>TSports</TypographyCustom>
                        {/* <TypographyCustom variant='subtitle2' fontWeight='100' >Bienes Raíces</TypographyCustom> */}
                    </Box>
                </Box>
            </Box>
            <TypographyCustom component='p' fontmode={2}>Estadisticas, graficas y comparaciones de jugadores de beisbol. Siguenos en nuestras redes!</TypographyCustom>
        </>
    )
}