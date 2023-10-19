'use client'
import React, {useState} from 'react'
import HeadlessNavButton, {IHeadlessNavButton} from './HeadlessNavButton'

export interface IProps {
    className?: string
    logo?: React.ReactElement
    items: IHeadlessNavButton[]
}

const ResponsiveHeader: React.FC<IProps> = ({className, logo, items}) => {
    const [isExpanded, setExpanded] = useState(false)

    const onClickToggleDropdown = () => {
        setExpanded(!isExpanded)
    }

    return (
        <>
            <nav className={`bg-white border-gray-200 dark:bg-gray-900 ${className}`}>
                <div
                    className={
                        'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-[16px] py-[12px]'
                    }>
                    <div>{logo}</div>
                    <div>
                        <ul className={'flex p-0 space-x-8 bg-white'}>
                            {items?.map(item => (
                                <HeadlessNavButton
                                    {...item}
                                    key={item.id}
                                    className={'block sm:hidden leading-[40px] text-fg.default hover:text-blue-700'}
                                />
                            ))}
                        </ul>
                    </div>
                    <button
                        className={`hidden sm:block inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
                        onClick={onClickToggleDropdown}>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                {isExpanded && (
                    <div>
                        <ul className={'flex flex-col p-4 mt-4 mx-4 border border-gray-100 rounded-lg bg-gray-50'}>
                            {items?.map(item => (
                                <HeadlessNavButton
                                    {...item}
                                    key={item.id}
                                    className={
                                        'py-[12px] px-[16px] text-gray-900 rounded hover:bg-gray-100 text-body.large'
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default ResponsiveHeader
