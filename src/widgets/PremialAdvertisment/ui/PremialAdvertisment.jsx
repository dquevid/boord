import { PremialAdvertismentCard } from '@/entities/PremialAdvertismentCard'
import { Button } from '@/shared/ui'

export default function PremialAdvertisment({ advertisment, seller }) {
    return (
        <PremialAdvertismentCard
            advertisment={advertisment}
            seller={seller}
            slotInteraction={
                <>
                    <Button>Позвонить</Button>
                    <Button variant="light">Написать</Button>
                </>
            }
        />
    )
}
