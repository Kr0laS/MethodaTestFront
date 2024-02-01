import { useState } from 'react';
import { ApiService as api } from '../axiosService';

const AddStatusForm = () => {
  const [statusName, setStatusName] = useState<string>('');

  const handleAddStatus = () => {
    api.addStatus(statusName).then(() => {

        setStatusName('');
    });
  };

  return (
    <div>
      <h2>Add Status</h2>
      <input
        type="text"
        value={statusName}
        onChange={(e) => setStatusName(e.target.value)}
      />
      <button onClick={handleAddStatus}>Add Status</button>
    </div>
  );
};

export default AddStatusForm;
