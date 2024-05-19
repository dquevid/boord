const Button = ({ className, variant, children }) => {
    return (
        <button
            className={`select-none box-border p-2 rounded-3xl font-bold text-sm outline-none transition-all ease-out active:scale-95 ${variant == 'light' ? 'bg-neutral-200 text-neutral-900' : 'bg-neutral-900 text-white'} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
