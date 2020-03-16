import { createContext } from 'react';

const BackgroundContext = createContext([
    {
        color: "linear-gradient(to right, rgb(253,227,171), rgb(248,124,180))"
    },
    {
        color: "linear-gradient(to right, rgb(127,231,226), rgb(114,194,250))"
    },
    {
        color: "linear-gradient(to right, rgb(201,168,250), rgb(248,123,247))"
    },
]);


export default BackgroundContext;

