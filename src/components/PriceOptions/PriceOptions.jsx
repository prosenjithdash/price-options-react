import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions=[
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 1200,
            "duration": "Per Month",
            "features": [
                "Access to gym floor",
                "Locker facility",
                "1 Personal training session/month",
                "Free Wi-Fi",
                "Changing room access",
                "Filtered water access",
                "Basic equipment usage"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 2000,
            "duration": "Per Month",
            "features": [
                "All Basic Plan features",
                "Unlimited personal training access",
                "Group fitness classes",
                "Steam bath access",
                "Protein shake discount",
                "Fitness tracking app access",
                "Weekend bootcamps",
                "Monthly progress report"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 3000,
            "duration": "Per Month",
            "features": [
                "All Standard Plan features",
                "Customized Diet & Nutrition Plan",
                "Massage therapy (2/month)",
                "Priority customer support",
                "24/7 Gym Access",
                "Dedicated locker",
                "Access to advanced machines",
                "Free guest pass (2/month)"
            ]
        },
        {
            "id": 4,
            "name": "Student Plan",
            "price": 800,
            "duration": "Per Month",
            "features": [
                "Access to gym floor (off-peak hours)",
                "Locker facility",
                "Group classes access",
                "Student ID required",
                "Guided stretching sessions",
                "Monthly health checkup (basic)",
                "Flexible hours on holidays"
            ]
        },
        {
            "id": 5,
            "name": "Yearly Membership",
            "price": 20000,
            "duration": "Per Year",
            "features": [
                "All Premium Plan features",
                "Free gym merchandise kit",
                "Guest pass (5/month)",
                "No enrollment fee",
                "Access to VIP lounge",
                "Priority booking for classes",
                "Early access to events",
                "Free body composition analysis (quarterly)"
            ]
        }
    ]

    return (
        <div className='m-12 '>
            <h2 className="text-4xl pb-4 font-bold">Best price in the town.</h2>
            <div className='md:grid md:grid-cols-3 md:gap-6 '>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;