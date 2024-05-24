import Star from '@/shared/assets/svg/kid_star.svg?react'

export default function AdvertismentCard({ title, price, geo, date, rating }) {
    return (
        <>
            <article className="rounded-2xl overflow-clip bg-white">
                <div className="h-36 bg-neutral-300"></div>
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
