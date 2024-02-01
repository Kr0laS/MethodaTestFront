import { useState, useEffect } from 'react';
import { ApiService as api } from '../axiosService';
import { Status } from '../interfaces';


const StatusList = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);

  const fetchStatuses = async () => {
    const data : any = await api.getStatus();
    console.log(data);
    
    setStatuses(data);
  };

  useEffect(() => {
    fetchStatuses();

    setStatuses(statuses);
  }, []);//

  return (
    <div>
      <h2>Status List</h2>
      <ul>
        {statuses.map((status) => (
          <li key={status.id}>{status.name}  {status.isInitial && "[INIT]"}
            {status.isOrphan && "[ORPHAN]"}
            {status.isFinal && "[FINAL]"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusList;