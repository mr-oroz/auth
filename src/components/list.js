import React from 'react';
import ListItem from "./list-item";

const List = (props) => {
    const {task, value, onDelete, onCheck} = props;
    console.log(task)
    return (
        <div>
            {
                task.map((elem, index) => {
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