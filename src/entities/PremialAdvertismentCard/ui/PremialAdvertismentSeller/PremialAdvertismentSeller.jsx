import Star from '@/shared/assets/svg/star.svg?react'

export default function PremialAdvertismentSeller({ name, rating, sales, reviews }) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white">
            <div className="flex items-center gap-1.5">
                <img
                    className="w-9 h-9 rounded-full"
                    src="https://dummyimage.com/500"
                    alt="Фото продавца"
                />
                <div className="flex flex-col gap-1.5 leading-none text-xs">
                    <h2 className="whitespace-nowrap">{name}</h2>
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
            </div>
            <div className="flex text-xs justify-between items-center">
                <span className="flex gap-1">
                    <b>{sales}</b> сделок
                </span>
                <div className="w-0.5 h-2 bg-neutral-200 rounded-full"></div>
                <span className="flex gap-1">
                    <b>{reviews}</b> отзыва
                </span>
            </div>
        </div>
    )
}
