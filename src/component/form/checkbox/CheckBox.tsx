'use client'
import React from 'react'

interface IProps {
    id: string
    className?: string
    label?: string
    disabled?: boolean
    onChanged?: (isChecked: boolean) => void
}

const CheckBox: React.FC<IProps> = ({id, className, label, disabled = false, onChanged}) => {
    return (
        <div className={`flex items-center gap-x-1 ${className}`}>
            <input
                id={id}
                type="checkbox"
                className={'w-4 h-4 peer'}
                disabled={disabled}
                onChange={event => {
                    onChanged && onChanged(event.target.checked)
                }}
            />
            <label htmlFor={id} className={'text-fg.default peer-disabled:text-fg.subtle'}>
                {label}
            </label>
        </div>
    )
}

export default CheckBox
