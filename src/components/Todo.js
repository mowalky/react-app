function Todo({ text }) {
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn">delete</button>
      </div>
    </div>
  );
}

export default Todo;
