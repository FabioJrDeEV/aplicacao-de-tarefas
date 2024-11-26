import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import '../styles/AddTask.css'

function AddTask() {
  const [title, setTitle] = useState("");
  const { addTasks } = useContext(TaskContext);

  function handleForm(event) {
    event.preventDefault();

    if (title.trim()) {
      const newTask = {
        id: uuidv4(),
        title: title,
      };
      addTasks(newTask);
      setTitle('')
    }else {
        alert('Adicione o titulo')
    }
  }
  return (
    <div className="containerTask">
      <h1 className="title">Adicionar Tarefas</h1>
      <form onSubmit={handleForm}>
        <input className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite a tarefa"
        />
        <div className="btn-form">
        <button type="submit">Adicionar</button>
        <Link className="link-add" to='/'>Ver Tarefas</Link>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
