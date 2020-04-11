import React from 'react';


function TodoList(props) {
    const { todo, clickItem } = props;

    function OnClickItem(todo) {
        clickItem(todo);
    }
    return (
        <ul>
            {todo.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => OnClickItem(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;