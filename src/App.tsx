import React from 'react';
import './App.css';
import Button from "./component/button/Button";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-600">
                Simple React Typescript Tailwind Sample
            </h1>
            <Button label={'text'} variant={'primary'} isLoading={true}/>
        </>
    );
}

export default App;
