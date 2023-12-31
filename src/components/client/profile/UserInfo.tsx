import { Box, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { CaracteristicaProfile } from ".";
import { AuthContext } from "../../../context/auth";

export const UserInfo: FC = () => {
    const { authState } = useContext(AuthContext);
    const { name, lastname, email, phone } = authState;
    return (
        <Box sx={{ p: 2, mb: 2 }}>
            <Typography variant="overline" fontWeight="bold">Tu información de usuario</Typography>
            <CaracteristicaProfile title="Nombre">{name}</CaracteristicaProfile>
            <CaracteristicaProfile title="Apellidos">{lastname}</CaracteristicaProfile>
            <CaracteristicaProfile title="Email">{email}</CaracteristicaProfile>
            <CaracteristicaProfile title="Teléfono">{phone}</CaracteristicaProfile>
        </Box>
    )
}