import React from 'react'
import ResponsiveHeader from './component/navigation/ResponsiveHeader/ResponsiveHeader'
import {IHeadlessNavButton} from './component/navigation/ResponsiveHeader/HeadlessNavButton'

const menus: IHeadlessNavButton[] = [
    {id: 'menu1', name: 'Menu1', href: '/menu1'},
    {id: 'menu2', name: 'Menu2', href: '/menu2'},
    {id: 'menu3', name: 'Menu3', href: '/menu3'},
]

function App() {
    return (
        <>
            <ResponsiveHeader
                className={'bg-bg.inset'}
                items={menus}
                logo={
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                }
            />
        </>
    )
}

export default App
