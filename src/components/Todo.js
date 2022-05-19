import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
