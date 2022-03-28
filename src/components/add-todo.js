import React, {useState} from 'react';

const AddTodo = (props) => {
    const {addTodo} = props;
    const [value, setValue] = useState('')
    const add = () => {
        addTodo(value)
        setValue('')
    }
    return (
        <div className={'add'}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={'text'}
                type="text"/>
            <button onClick={add}>add Todo</button>
        </div>
    );
};

export default AddTodo;