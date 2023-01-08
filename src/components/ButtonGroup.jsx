import React, {Children} from 'react'

function ButtonGroup({children,className}) {
    return (
        <div className={`flex ${className}`}>
            {Children.map(children, (child, index) => {
                let className = ''
                if (index === 0) {
                    className += ' rounded-l-md'
                }
                if (index === Children.count(children) - 1) {
                    className += ' rounded-r-md'
                }
                return React.cloneElement(child, {
                    className
                })
            })}
        </div>
    )
}

export function Button({children, className, ...props}) {
    return (
        <button className={`px-4 py-2 font-bold font-Poppins text-white bg-blue-500 hover:bg-blue-700 flex items-center gap-2 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default ButtonGroup