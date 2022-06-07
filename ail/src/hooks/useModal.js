import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
      console.log(visible);
    setVisible(!visible);    
  }
  return {toggle, visible}
};

export default useModal;