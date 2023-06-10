import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";


const App = () => {
    const [showModal, setModal] = useState(false);
  return (
      <>
          <button
              className="w-100 btn btn-primary"
              onClick={() => setModal(true)}
          >Modal</button>
          <Modal show={showModal}/>
      </>
  );
}

export default App;
