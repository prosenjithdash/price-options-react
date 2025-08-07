import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { id, name, features, price} = option;
    return (
        <div className=' mb-[20px] bg-blue-900 rounded-md p-4 text-white flex flex-col'>
            <h2>
                <span className='text-6xl font-extrabold '>{price}</span>
                <span className='text-1xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>

            <button className='w-full bg-red-800 p-2 rounded-lg m-2'>Buy Now</button>
        </div>
    );
};

export default PriceOption;