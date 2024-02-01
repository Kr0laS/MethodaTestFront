import { axiosInstance as axios } from ".";
import { Transition } from "../interfaces";

export const getTransitions = async () => {
    const res = await axios.get('/api/Transition');
    console.log(res.data);
    
    return res.data;
  }
  
  export const addTransition = async (transition: Transition) => {
    const res = await axios.post('/api/Transition/Add', transition);
    console.log(res.data);
    return res.data;
  }
  
  export const deleteTransition = async (transitionId: number) => {
    const res = await axios.delete(`/api/Transition/Delete/${transitionId}`);
    console.log(res.data);
    return res.data;
  }