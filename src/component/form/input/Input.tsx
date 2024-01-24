'use client'
import React, {HTMLInputTypeAttribute} from 'react'

interface IProps {
    className?: string
    inputClassName?: string
    label?: string
    defaultValue?: string
    value?: string
    children?: any
    placeholder?: string
    renderRight?: React.ReactElement
    disabled?: boolean
    autoFocus?: boolean
    required?: boolean
    inputType?: HTMLInputTypeAttribute
    onChanged?: (text: string) => void

    onPressEnter?(): void
}

const Input: React.FC<IProps> = ({
    inputClassName,
    className,
    label,
    placeholder,
    disabled = false,
    required = false,
    defaultValue,
    value,
    onChanged,
    renderRight,
    autoFocus,
    inputType,
    onPressEnter,
    children,
}) => {
    const onKeyDownEnter = (e: any) => {
        if (e.key === 'Enter') {
            onPressEnter && onPressEnter()
        }
    }

    return (
        <div className={`flex flex-col gap-y-[4px] text-fg.muted ${className}`}>
            {label && (
                <p className={'text-[14px] text-fg.default font-semibold'}>
                    {label} {required && '*'}
                </p>
            )}
            <div className={'flex gap-x-[4px] items-center'}>
                <input
                    className={`grow box-border w-full border border-border.default rounded-md px-[12px] py-[1px] text-[14px] leading-[26px] text-fg.default ${inputClassName}`}
                    placeholder={placeholder}
                    type={inputType}
                    disabled={disabled}
                    value={value}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}
                    onChange={e => {
                        const text = e.target.value
                        onChanged && onChanged(text)
                    }}
                    onKeyDown={onKeyDownEnter}
                />
                {renderRight}
            </div>
            {children}
        </div>
    )
}

export default Input
