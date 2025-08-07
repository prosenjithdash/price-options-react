import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className=' flex items-center gap-2 text-yellow-400 pt-2'> <IoCheckmarkDoneCircle />{feature}</p>
        </div>

    );
};

export default Feature;