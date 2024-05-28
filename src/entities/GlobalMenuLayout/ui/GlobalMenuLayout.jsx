import { useEffect, useRef, useState } from 'react'
import GlobalMenuItem from './GlobalMenuItem'

export default function GlobalMenu({ items }) {
    const [active, setActive] = useState(1)
    const [rect, setRect] = useState({})

    const ref = useRef()

    useEffect(() => {
        const rect_ = ref.current.getBoundingClientRect()
        setRect(rect_)
    }, [active])

    return (
        <div className="fixed p-4 w-full bottom-0 left-[50%] translate-x-[-50%] ">
            <div className="flex relative px-8 py-4 w-full justify-between rounded-full bg-white drop-shadow-[0_0_50px_rgba(0,0,0,.05)]">
                <div
                    style={
                        rect.left ?
                            {
                                width: rect.width * 1.5,
                                height: rect.height * 1.15,
                                transform: `translate(${rect.left - rect.width - 18}px, ${(rect.height - rect.height * 1.15) / 2}px)`,
                            }
                        :   undefined
                    }
                    className="absolute rounded-full bg-neutral-900"
                />
                {items.map((item, i) => (
                    <GlobalMenuItem
                        key={i}
                        {...(i == active ? { ref: ref } : {})}
                        onClick={() => {
                            setActive(i)
                        }}>
                        {item}
                    </GlobalMenuItem>
                ))}
            </div>
        </div>
    )
}
