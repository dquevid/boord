import { forwardRef } from "react"
import { Link } from "react-router-dom"

const GlobalMenuItem = forwardRef(({ children, url, onClick, className }, ref) => {
    return (
        <Link to={url} className={'p-1 ' + className} {...{ onClick, ref }}>
            {children}
        </Link>
    )
})

export default GlobalMenuItem
