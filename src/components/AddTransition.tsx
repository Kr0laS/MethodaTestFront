import React, { useState } from 'react';
import { ApiService as api } from '../axiosService';
import { Transition } from '../interfaces';

const AddTransitionForm: React.FC = () => {
  const [transitionName, setTransitionName] = useState<string>('');
  const [fromStatus, setFromStatus] = useState<number>(0);
  const [toStatus, setToStatus] = useState<number>(0);

  const handleAddTransition = () => {
    const newTransition: Transition = {
      id: 0, // my api generates the id
      name: transitionName,
      fromStatus: fromStatus,
      toStatus: toStatus,
    };

    api.addTransition(newTransition)
      .then(response => {
        console.log('Transition added successfully:', response.data);

        setTransitionName('');
        setFromStatus(0);
        setToStatus(0);
      })
      .catch((error: any) => {
        console.error('Error adding transition:', error);
      });
  };

  return (
    <div>
      <h2>Add Transition</h2>
      <input
        type="text"
        placeholder="Transition Name"
        value={transitionName}
        onChange={(e) => setTransitionName(e.target.value)}
      />
      <label>From Status:</label>
      <input
        type="number"
        placeholder="From Status"
        value={fromStatus}
        onChange={(e) => setFromStatus(parseInt(e.target.value))}
      />
      <label>To Status:</label>
      <input
        type="number"
        placeholder="To Status"
        value={toStatus}
        onChange={(e) => setToStatus(parseInt(e.target.value))}
      />
      <button onClick={handleAddTransition}>Add Transition</button>
    </div>
  );
};

export default AddTransitionForm;
