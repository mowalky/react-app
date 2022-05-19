function Modal(props) {
  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={cancelHandler}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
