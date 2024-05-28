import { PremialAdvertismentCard } from '@/entities/PremialAdvertismentCard'
import { Button } from '@/shared/ui'

export default function PremialAdvertisment({ advertisment, seller }) {
    return (
        <PremialAdvertismentCard
            advertisment={advertisment}
            seller={seller}
            slotInteraction={
                <>
                    <Button
                        onClick={() => {
                            if (navigator in window)
                                navigator.vibrate(Array.from(Array(3).keys()).map(i => 100))
                        }}>
                        Позвонить
                    </Button>
                    <Button variant="light">Написать</Button>
                </>
            }
        />
    )
}
