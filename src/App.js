import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import TaskProvider from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-tasks" element={<AddTask />}></Route>
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
