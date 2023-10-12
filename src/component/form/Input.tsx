'use client'
import React from 'react'

export interface IProps {
    className?: string
    inputClassName?: string
    label?: string
    defaultValue?: string
    children?: any
    placeholder?: string
    renderRight?: React.ReactElement
    disabled?: boolean
    required?: boolean
    onChanged?: (text: string) => void
}

const Input: React.FC<IProps> = ({
                                     inputClassName,
                                     label,
                                     placeholder,
                                     disabled = false,
                                     required = false,
                                     defaultValue,
                                     onChanged,
                                     renderRight,
                                     children
                                 }) => {
    return (
        <div className={'flex flex-col gap-y-[4px] text-fg.muted'}>
            {label && (
                <p className={'text-[14px] text-fg.default font-semibold'}>
                    {label} {required && '*'}
                </p>
            )}
            <div className={'flex gap-x-[4px] items-center'}>
                <input
                    className={`border border-border.default rounded-md px-[12px] py-[1px] text-[14px] leading-[26px] text-fg.default ${inputClassName}`}
                    placeholder={placeholder}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={e => {
                        const text = e.target.value
                        onChanged && onChanged(text)
                    }}
                />
                {renderRight}
            </div>
            {children}
        </div>
    )
}

export default Input
