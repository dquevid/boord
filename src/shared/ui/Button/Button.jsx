const Button = ({ className, variant, children, onClick }) => {
    return (
        <button onClick={onClick}
            className={`select-none box-border px-4 py-2 rounded-3xl font-bold text-sm outline-none transition-all ease-[cubic-bezier(0.25,0,0,1)] active:scale-95 ${variant == 'light' ? 'bg-neutral-200 text-neutral-900' : 'bg-neutral-900 text-white'} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
