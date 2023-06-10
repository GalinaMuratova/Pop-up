import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";

const App = () => {
    const [showModal, setModal] = useState(false);

    const cancel = () => setModal(false);
  return (
      <>
          <button
              className="w-100 btn btn-primary"
              onClick={() => setModal(true)}
          >Modal</button>
          <Modal show={showModal} title="Just some text" onClose={cancel}>
              <div className="modal-body">
                  As I write this code, I am very nervous about my upcoming thesis defense
              </div>
          </Modal>
      </>
  );
}

export default App;
