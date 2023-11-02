import React from 'react'
import ResponsiveHeader from './component/navigation/ResponsiveHeader/ResponsiveHeader'
import {IHeadlessNavButton} from './component/navigation/ResponsiveHeader/HeadlessNavButton'
import {ISelectItem} from './component/form/select/Select'
import CheckBox from './component/form/checkbox/CheckBox'

const menus: IHeadlessNavButton[] = []

const items: ISelectItem[] = [
    {id: 'menu1', label: 'Menu1', value: 'hello1'},
    {id: 'menu2', label: 'Menu2', value: 'hello2'},
    {id: 'menu3', label: 'Menu3', value: 'hello3'},
]

function App() {
    return (
        <div className={''}>
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
            <div className={'layout-default overflow-hidden p-[20px]'}>
                <CheckBox id={'check_1'} label={'Sample Text1'} onChanged={isChecked => console.log(isChecked)} />
                <CheckBox id={'check_2'} label={'Sample Text2'} onChanged={isChecked => console.log(isChecked)} />
            </div>
        </div>
    )
}

export default App
