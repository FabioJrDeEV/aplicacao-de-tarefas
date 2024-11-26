import React, { useContext } from "react";
import { TaskContext } from "../context/Context";
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
  const { tasks, deleteTask } = useContext(TaskContext);
  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas</h1>
      <Link className="link" to="/add-tasks">Adicionar Tarefas</Link>
      <ul>
       {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <li className="li" key={task.id}>
              <span>{task.title}</span>
              <button className="btn-home" onClick={() => deleteTask(task.id)}>Remover Tarefa</button>
            </li>
          ))
        ) : (
          <p>Nenhuma tarefa disponível.</p>
        )}
      </ul>
    </div>
  );
}

export default Home;
