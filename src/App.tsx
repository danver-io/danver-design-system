import React from 'react'
import Input from './component/form/input/Input'
import Button from './component/button/Button'

function App() {
    return (
        <>
            <Input defaultValue={'fff'} />
            <Button isLoading={true} />
        </>
    )
}

export default App
