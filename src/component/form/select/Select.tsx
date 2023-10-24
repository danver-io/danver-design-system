'use client'
import React from 'react'

interface ISelectItem {
    id: string
    label: string
    value?: any
}

interface IProps {
    className?: string
    label?: string
    defaultId?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    items?: ISelectItem[]
    onChanged?: (item?: ISelectItem) => void
}

const Select: React.FC<IProps> = ({label, required = false, disabled = false, onChanged, items = []}) => {
    return (
        <div className={'flex flex-col gap-y-[8px] items-start'}>
            {label && (
                <label className={'block text-[14px] text-fg.default font-semibold'}>
                    {label} {required && '*'}
                </label>
            )}
            <div className={'inline-block border border-border.default rounded-md overflow-hidden '}>
                <select
                    className={'border border-transparent border-r-[8px] min-h-[30px] pl-[12px] pr-[8px]'}
                    style={{backgroundPosition: 'left 0.5rem center'}}
                    disabled={disabled}
                    onChange={event => {
                        onChanged && onChanged(items.find(item => item.id == event.target.value))
                    }}>
                    {items?.map(item => <option id={item.id} key={item.id} label={item.label} value={item.id} />)}
                </select>
            </div>
        </div>
    )
}

export {Select, ISelectItem}
