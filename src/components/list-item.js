import React from 'react';

const ListItem = (props) => {
    const {elem, index, onDelete, onCheck} = props;
    // console.log(elem)
    return (
        <div className={'list-item'}>
            <span>{index + 1}</span>
            <div>{elem.title}</div>
            <input
                checked={elem.found}
                onClick={onCheck}
                type="checkbox"/>
            <button
                onClick={onDelete}
                disabled={elem.found}>
                delete
            </button>
        </div>
    );
};

export default ListItem;