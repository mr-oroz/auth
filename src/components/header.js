import React from 'react';

const Header = (props) => {
    const {list, onChange, value} = props;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>TODO List ({list})</h1>
            <span>done: 0</span>
            <span>not done: 0</span>
            <select
                onChange={onChange}
                style={{width: '100px'}}>
                <option value="all">All</option>
                <option value="done">done</option>
                <option value="not-done">not done</option>
            </select>
        </div>
    );
};

export default Header;