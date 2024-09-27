import { publicRequest } from "../config/AxiosConfig";



export const login = async (data) => {
    return await publicRequest.post(`/admin/login`, data);
};