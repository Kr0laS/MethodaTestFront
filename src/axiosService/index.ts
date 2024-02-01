import axios from "axios";
import * as StatusService from './StatusService';
import * as TransitionService from './TransitionService';

export const axiosInstance = axios.create(
    {
        baseURL: 'https://localhost:7016',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
    }
)

export const ApiService = {
    getStatus: StatusService.GetStatuses,
    addStatus: StatusService.addStatus,
    updateStatus: StatusService.updateStatus,
    deleteStatus: StatusService.deleteStatus,

    getTransition: TransitionService.getTransitions,
    addTransition: TransitionService.addTransition,
    deleteTransition: TransitionService.deleteTransition,
}