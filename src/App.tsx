import React from 'react'
import Input from './component/form/input/Input'

function App() {
    return (
        <>
            <div className={'grid grid-cols-[auto_100px_100px]'}>
                <Input />
                <Input />
                <Input />
            </div>
            <div className={'grid grid-cols-[auto_100px_100px]'}>
                <input className={'border'} />
                <input className={'border'} />
                <input className={'border'} />
            </div>
        </>
    )
}

export default App
