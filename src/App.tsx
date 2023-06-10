import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

const App = () => {
    const [showModal, setModal] = useState(false);
    const cancel = () => setModal(false);
    const dismiss = () => console.log("close")
  return (
      <>
          <div className="text-center">
              <button
                  className="w-50 m-3  btn btn-primary"
                  onClick={() => setModal(true)}
              >Show modal
              </button>
          </div>
          <Modal show={showModal} title="Just some text" onClose={cancel}>
              <div className="modal-body">
                  <p className="p-3">As I write this code, I am very nervous about my upcoming thesis defense</p>
                  <p className="p-3">What doesn't kill you makes you stronger stand a little taller
                      doesn't mean I'm lonely when I'm alone
                      What doesn't kill you makes a fighter
                      Footsteps even lighter
                      Doesn't mean I'm over 'cause you're gone
                  </p>
              </div>
          </Modal>
          <Alert type="warning-subtle" onDismiss={dismiss}>
              <p>This is a warning type alert</p>
          </Alert>
          <Alert type="success-subtle">
              <p>This is a success type alert</p>
          </Alert>
          <Alert type="danger-subtle">
              <p>This is a danger type alert</p>
          </Alert>
      </>
  );
}

export default App;
