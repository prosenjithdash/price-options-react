import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-6' key={route.id}><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;