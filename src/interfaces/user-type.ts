import { IRole } from "./role-type";
import { IStatus } from "./status-type";

export interface IUser {
    id: number;
    name: string;
    lastname: string;
    document: string;
    phone: string;
    photo?:string;
    short_address: string;
    email: string;
    role_id: number;
    role?: IRole;
    status_id: number;
    status?: IStatus;
    created_at: string;
    logged: boolean;
    color: string;
    token?: string;
}