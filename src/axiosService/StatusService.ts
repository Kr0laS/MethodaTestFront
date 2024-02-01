import { axiosInstance as axios } from ".";
import { Status } from "../interfaces";

export const GetStatuses = async() => {
    const res = await axios.get(`/api/Status`);
    return res.data;
}

export const addStatus = async (name: string) => {
    const res = await axios.post('/api/Status/Add', name);
    return res.data;
}
  
  export const deleteStatus = async (statusId: number) => {
    const res = await axios.delete(`/api/Status/Delete/${statusId}`);
    return res.data;
}

export const updateStatus = async (status: Status) => {
    const res = await axios.put(`/api/Status/Update`, status);
    return res.data;
  }
