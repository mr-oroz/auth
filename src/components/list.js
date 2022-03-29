import React from 'react';
import ListItem from "./list-item";

const List = (props) => {
    const {task, value, onDelete, onCheck} = props;
    console.log(task)
    return (
        <div>
            {
                task.filter(elem => {
                    if(value === 'all') {
                        return elem
                    } else if(value === 'done') {
                        return elem.found
                    } else if(value === 'not-done') {
                        return  !elem.found
                    }
                }).map((elem, index) => {
                    return <ListItem
                        onCheck={() => onCheck(index)}
                        onDelete={() => onDelete(index)}
                        index={index}
                        elem={elem}
                        key={index}  />
                })
            }
        </div>
    );
};

export default List;