import { useEffect, useRef, useState } from 'react'
import GlobalMenuItem from './GlobalMenuItem'

export default function GlobalMenu({ items }) {
    const [active, setActive] = useState(1)
    const [rect, setRect] = useState({})

    const ref = useRef()

    useEffect(() => {
        setRect(ref.current.getBoundingClientRect())
    }, [active])

    return (
        <div className="fixed p-4 w-full bottom-0 left-[50%] translate-x-[-50%] ">
            <div className="flex relative px-8 py-4 w-full justify-between rounded-full bg-white drop-shadow-[0_0_50px_rgba(0,0,0,.1)]">
                <div
                    style={
                        rect.left ?
                            {
                                width: rect.width * 1.5,
                                height: rect.height * 1.15,
                                left: 16,
                                transform: `translate(${rect.left - rect.width - 2}px, ${(rect.height - rect.height * 1.15) / 2}px)`,
                            }
                        :   undefined
                    }
                    className="absolute duration-500 rounded-full bg-neutral-900"
                />
                {items.map((e, i) => (
                    <GlobalMenuItem
                        key={i}
                        {...(i == active ? { ref: ref } : {})}
                        url={e.url}
                        onClick={() => {
                            setActive(i)
                        }}>
                        {e.item}
                    </GlobalMenuItem>
                ))}
            </div>
        </div>
    )
}
