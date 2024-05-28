import Star from '@/shared/assets/svg/star.svg?react'

export default function AdvertismentCard({ title, price, geo, date, rating }) {
    return (
        <>
            <article className="rounded-2xl overflow-clip bg-white">
                <div className="h-32 relative bg-neutral-300 p-2">
                    <div className="w-full absolute left-0 bottom-0 flex gap-4 p-2 justify-center">
                        {Array.from(Array(4).keys()).map(i => (
                            <div
                                key={i}
                                className={`w-2 h-2 ${i == 0 ? 'bg-neutral-400' : 'bg-white'} rounded-full`}></div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 p-4">
                    <h1 className="text-sm font-bold">{title}</h1>
                    <h2 className="text-sm font-bold">{price}</h2>
                    <div className="flex gap-1.5 items-center">
                        <img
                            className="w-5 h-5 rounded-full"
                            src="https://dummyimage.com/500"
                            alt="Фото продавца"
                        />
                        <div className="flex gap-1">
                            {Array.from(Array(5).keys()).map(i => (
                                <Star
                                    {...(i > rating ?
                                        { className: 'fill-neutral-300' }
                                    :   { className: 'fill-neutral-800' })}
                                    width={12}
                                    height={12}
                                    key={i}></Star>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col text-xs text-neutral-500">
                        <span>{geo}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </article>
        </>
    )
}
