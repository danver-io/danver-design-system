'use client'
import React from 'react'

export interface IProps {
    className?: string
    leadingIcon?: React.ReactElement
    trailingIcon?: React.ReactElement
    count?: number
    label?: string
    size?: 'small' | 'medium' | 'large'
    variant?: 'default' | 'primary' | 'danger' | 'outline' | 'invisible'
    onClick?: () => void
    disabled?: boolean
    isLoading?: boolean
}

interface ColorStyle {
    containerClassName?: string
    textClassName?: string
    iconClassName?: string
    countClassName?: string
    loadingClassName?: string
}

const variantStyles = new Map<string, ColorStyle>()
variantStyles.set('default', {
    containerClassName: 'bg-bg.subtle text-fg.default disabled:opacity-50 border border-border.default fill-fg.default',
    countClassName: 'bg-[#AFB8C133]',
    loadingClassName: 'fill-fg.default',
})
variantStyles.set('primary', {
    containerClassName: 'bg-fg.success disabled:opacity-50 text-white border border-transparent fill-white',
    countClassName: 'bg-[#002D1133]',
    loadingClassName: 'fill-white',
})
variantStyles.set('danger', {
    containerClassName: 'bg-bg.subtle text-fg.danger disabled:opacity-50 border border-border.default',
    countClassName: 'bg-[#CF222E1A]',
    loadingClassName: 'fill-fg.default',
})
variantStyles.set('invisible', {
    containerClassName:
        'hover:enabled:bg-bg.subtle text-fg.accent disabled:text-fg.default disabled:opacity-50 border border-transparent',
    countClassName: 'bg-[#AFB8C133]',
    loadingClassName: 'fill-fg.default',
})
variantStyles.set('outline', {
    containerClassName: 'bg-bg.subtle text-fg.accent disabled:opacity-50 border border-border.default',
    countClassName: 'bg-[#0969DA1A]',
    loadingClassName: 'fill-fg.default',
})

interface SizeStyle {
    containerClassName?: string
    textClassName?: string
    iconClassName?: string
    countClassName?: string
}

const sizeStyles = new Map<string, SizeStyle>()
sizeStyles.set('small', {
    containerClassName: 'px-[8px] text-[12px] font-semibold leading-[26px] rounded-md h-[28px]',
    textClassName: '',
    iconClassName: '',
    countClassName: '',
})
sizeStyles.set('medium', {
    containerClassName: 'px-[12px] text-[14px] font-semibold leading-[30px] rounded-md text-body.medium h-[32px]',
    textClassName: '',
    iconClassName: '',
    countClassName: '',
})
sizeStyles.set('large', {
    containerClassName: 'px-[16px] text-[14px] font-semibold leading-[38px] rounded-md h-[40px]',
    textClassName: '',
    iconClassName: '',
    countClassName: '',
})

const buttonClickStyle = 'transform active:scale-[0.95] transition-transform origin-center disabled:transform-none'

const Button: React.FC<IProps> = ({
    leadingIcon,
    trailingIcon,
    label,
    count = 0,
    onClick,
    disabled = false,
    size = 'medium',
    variant = 'default',
    isLoading = false,
}) => {
    return (
        <button
            className={`flex items-center justify-center ${buttonClickStyle} relative ${variantStyles.get(variant)
                ?.containerClassName} ${sizeStyles.get(size)?.containerClassName}`}
            onClick={onClick}
            disabled={disabled}>
            <div className={`flex justify-center items-center gap-x-[5px] select-none ${isLoading && 'invisible'}`}>
                {leadingIcon && (
                    <div
                        className={`${variantStyles.get(variant)?.iconClassName} ${sizeStyles.get(size)
                            ?.iconClassName} w-[16px] h-[16px]`}>
                        {leadingIcon}
                    </div>
                )}
                <p
                    className={`${variantStyles.get(variant)?.textClassName} ${sizeStyles.get(size)
                        ?.textClassName} whitespace-nowrap truncate`}>
                    {label}
                </p>
                {trailingIcon && (
                    <div
                        className={`${variantStyles.get(variant)?.iconClassName} ${sizeStyles.get(size)
                            ?.iconClassName} w-[16px] h-[16px]`}>
                        {trailingIcon}
                    </div>
                )}
                {count > 0 && (
                    <div
                        className={`${variantStyles.get(variant)?.countClassName} ${sizeStyles.get(size)
                            ?.countClassName} rounded-full flex items-center justify-center text-[12px] min-w-[16px] h-[16px] px-[5px]`}>
                        {count < 100 ? count : '99+'}
                    </div>
                )}
            </div>
            {isLoading && (
                <div className={'absolute w-[20px]'}>
                    {/*<LoadingIcon className={`w-[16px] h-[16px] animate-spin ${variantStyles.get(variant)?.loadingClassName}`} />*/}
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`hds-flight-icon--animation-loading w-[16px] h-[16px] animate-spin ${variantStyles.get(
                            variant,
                        )?.loadingClassName}`}>
                        <g fill-rule="evenodd" clip-rule="evenodd">
                            <path
                                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                                opacity=".2"
                            />
                            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
                        </g>
                    </svg>
                </div>
            )}
        </button>
    )
}

export default Button
