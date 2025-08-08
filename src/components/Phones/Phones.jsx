import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {

    const [phones, setPhones] = useState([])
    

    // Data load step 01 with fetch

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         .then(data => setPhones(data.data))
    // },[])




    // Data load step 02 with axios
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => setPhones(data.data.data))
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData)
            })


    },[])


    
    return (
        <div className='m-12'>
            <h2>Phones: {phones.length}</h2>
            <h2 className='text-2xl front-bold'>Bar Chart : </h2>
            <BarChart width={800} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;