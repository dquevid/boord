export default function PremialAdvertismentInfo({ price, title, description, date, geo }) {
    return (
        <div className="self-stretch basis-0 grow shrink flex flex-col gap-2 items-start p-4 rounded-2xl bg-white">
            <div className="p-0 min-h-0 flex px-2 py-1 border-neutral-900 rounded-full border-[2.5px]">
                <h2 className="leading-none h-[.80rem] text-sm font-['Inter'] font-bold">{price}</h2>
            </div>
            <h1 className="leading-5 text-sm text-balance font-bold">{title}</h1>
            <p className="self-stretch basis-0 grow shrink bg-clip-text bg-gradient-to-b from-black from-25% to-transparent text-transparent leading-4 text-xs text-ellipsis overflow-hidden text-balance">
                {description}
            </p>
            <div className="self-stretch basis-0 shrink leading-3 flex flex-col gap-1 text-neutral-500 text-xs">
                <span className="min-h-3 basis-0 overflow-hidden text-ellipsis">{geo}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}
