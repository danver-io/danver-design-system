import React from 'react'

export interface IHeadlessNavButton {
    name: string
    href: string
    className?: string
}

const HeadlessNavButton: React.FC<IHeadlessNavButton> = ({className, name, href}) => {
    return (
        <a href={href} className={`${className}`}>
            <p>{name}</p>
        </a>
    )
}

export default HeadlessNavButton
