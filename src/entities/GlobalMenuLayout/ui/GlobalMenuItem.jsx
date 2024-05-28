import { forwardRef } from "react"

const GlobalMenuItem = forwardRef(({ children, title, onClick, className }, ref) => {
    return (
        <button className={'p-1 ' + className} {...{ title, onClick, ref }}>
            {children}
        </button>
    )
})

export default GlobalMenuItem
