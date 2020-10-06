import { v4 as uuidv4 } from "uuid";
const todoData = [
    {
        id: uuidv4(),
        text: "Complete React basics",
        completed: false,
    },

    {
        id: uuidv4(),
        text: "Build React project to solidify learning",
        completed: true,
    },

    {
        id: uuidv4(),
        text: "Start Redux and Redux-saga",
        completed: false,
    },

    {
        id: uuidv4(),
        text: "Work of Google Cloud Platform community project",
        completed: false,
    },

    {
        id: uuidv4(),
        text: "Fine Tuned the company website with Dev Peter",
        completed: false,
    },
];

export default todoData;
