import React from 'react';
import { useState } from 'react';


function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function HandleOnSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        var valueform = {
            title: value
        }
        onSubmit(valueform);
    }

    function HandleChangeValue(e) {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={HandleOnSubmit}>
            <input
                value={value}
                onChange={HandleChangeValue}
                type='text'
            />
        </form>
    );
}

export default TodoForm;