import React, {useState, useEffect} from 'react';
import Header from "./components/header";
import AddTodo from "./components/add-todo";
import List from "./components/list";
import './app.css';

const App = () => {
    const getLocal = JSON.parse(localStorage.getItem('todo'))
    const [task, setTask] = useState(getLocal || []);
    const [value, setValue] = useState('all');
    const onDelete  = (index) => {
        const item = task.findIndex((elem, idx) => idx === index);
        const before = task.slice(0, item)
        const after = task.slice(item + 1)
        const newArr = [...before, ...after]
        setTask(newArr)
    }

    const onCheck = (index) => {
        const item = task.findIndex((elem, idx) => idx === index);
        const newItem = {...task[item], found: !task[item].found}
        const before = task.slice(0, item)
        const after = task.slice(item + 1)
        const newArr = [...before,  newItem, ...after]
        setTask(newArr)
    }
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(task))
    }, [task]);

    const list = task.length;

    const onChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const addTodo = (value) => {
        const newItem = {
            title: value,
            found: false
        }
        const newArr = [...task, newItem]
        setTask(newArr)
    }

    const done  = task.filter(elem => elem.found).length
    const notDone  = task.filter(elem => !elem.found).length
    return (
        <div>
            <Header
                done={done}
                notDone={notDone}
                onChange={onChange}
                list={list}/>
            <AddTodo addTodo={addTodo}/>
            <List
                onCheck={onCheck}
                onDelete={onDelete}
                value={value}
                task={task}/>
        </div>
    );
};

export default App;