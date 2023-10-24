import React from 'react'
import ResponsiveHeader from './component/navigation/ResponsiveHeader/ResponsiveHeader'
import {IHeadlessNavButton} from './component/navigation/ResponsiveHeader/HeadlessNavButton'
import {ISelectItem, Select} from './component/form/select/Select'
import Button from './component/button/Button'

const menus: IHeadlessNavButton[] = []

const items: ISelectItem[] = [
    {id: 'menu1', label: 'Menu1', value: 'hello1'},
    {id: 'menu2', label: 'Menu2', value: 'hello2'},
    {id: 'menu3', label: 'Menu3', value: 'hello3'},
]

function App() {
    return (
        <>
            <ResponsiveHeader
                className={'bg-bg.inset'}
                logo={
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                }
                items={menus}
            />
            <div className={'layout-default overflow-hidden '}>
                <Select
                    items={items}
                    onChanged={item => {
                        console.log(item)
                    }}
                />
                <Button
                    label={
                        'beee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wdeee ee e e e d wdwdwdweee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wdeee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd eee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wdwd wd wd wd  wd wd wd wd wdd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wdeee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wdeee ee e e e d wdwdwdwd wd wd wd wd wd  wd wd wd wd wd wd wd  wd wd wd wd wd '
                    }
                    variant={'primary'}
                />
            </div>
        </>
    )
}

export default App
