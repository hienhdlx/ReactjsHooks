import React, { useState } from 'react';
import './App.scss';
import Todolist from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todolist, settodolist] = useState([
    { id: 1, title: "play game" },
    { id: 2, title: "play music" },
    { id: 3, title: "do homework" }
  ]);

  function HandleClickItem(param) {
    var newlisttodo = [...todolist];
    var index = todolist.findIndex(x => x.id === param.id);
    if (index < 0) return;
    newlisttodo.splice(index, 1);
    settodolist(newlisttodo);
  }

  function HandleTodoFormSubmit(formValue) {
    var newtodolist = [...todolist];
    var obj = { id: newtodolist.length + 1, ...formValue };

    newtodolist.push(obj);
    settodolist(newtodolist);
  }

  return (
    <div className="App">
      <TodoForm onSubmit={HandleTodoFormSubmit} />
      <Todolist todo={todolist} clickItem={HandleClickItem} />
    </div>
  );
}

export default App;
