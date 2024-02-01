import { useState, useEffect } from 'react';
import { ApiService as api } from '../axiosService';
import { Transition } from '../interfaces';

const TransitionList = () => {
  const [transitions, setTransitions] = useState<Transition[]>([]);

  const fetchTransitions = async () => {
    const data : any = await api.getTransition();
    console.log(data);
    
    setTransitions(data);
  };

  useEffect(() => {
    fetchTransitions();
  }, []);

  return (
    <div>
      <h2>Transition List</h2>
      <ul>
        {transitions.map((transition) => (
          <li key={transition.name}>
            {transition.name}: {transition.fromStatus} to {transition.toStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransitionList;
