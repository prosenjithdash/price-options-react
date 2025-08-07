import { LineChart, Line } from 'recharts';
const data = [
    { id: 1, name: "Ayan", math: 78, english: 82, bangla: 75 },
    { id: 2, name: "Borsha", math: 85, english: 79, bangla: 80 },
    { id: 3, name: "Choton", math: 92, english: 88, bangla: 90 },
    { id: 4, name: "Dipa", math: 66, english: 70, bangla: 72 },
    { id: 5, name: "Emon", math: 74, english: 76, bangla: 68 },
    { id: 6, name: "Faria", math: 88, english: 91, bangla: 86 },
    { id: 7, name: "Gopal", math: 59, english: 64, bangla: 60 },
    { id: 8, name: "Hira", math: 81, english: 77, bangla: 84 },
    { id: 9, name: "Ishita", math: 95, english: 94, bangla: 96 },
    { id: 10, name: "Jony", math: 70, english: 72, bangla: 69 }
];

const LineCart = () => {
    return (
        <LineChart width={900} height={500} data={data}>
            <Line type="monotone" dataKey="math" stroke="purple" />
            <Line type="monotone" dataKey="english" stroke="red" />
            <Line type="monotone" dataKey="bangla" stroke="green" />
        </LineChart>
    );
};

export default LineCart;