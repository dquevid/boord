import PremialAdvertismentInfo from '../PremialAdvertismentInfo/PremialAdvertismentInfo'
import PremialAdvertismentSeller from '../PremialAdvertismentSeller/PremialAdvertismentSeller'

export default function AdvertismentCard({ advertisment, seller, slotInteraction }) {
    return (
        <>
            <article className="flex flex-col gap-2 p-2 rounded-3xl from-white to-neutral-500/20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]">
                <div className="h-32 relative rounded-2xl bg-neutral-300 p-2">
                    <div className="w-full absolute bottom-0 flex gap-4 p-2 justify-center">
                        {Array.from(Array(4).keys()).map(i => (
                            <div
                                key={i}
                                className={`w-2 h-2 ${i == 0 ? 'bg-neutral-400' : 'bg-white'} rounded-full`}></div>
                        ))}
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <PremialAdvertismentInfo {...advertisment} />
                    <div className="flex flex-col gap-2">
                        <PremialAdvertismentSeller {...seller} />
                        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white">{slotInteraction}</div>
                    </div>
                </div>
            </article>
        </>
    )
}
