import { AdvertismentCard } from '@/entities/AdvertismentCard'

export default function Advertisment({ advertisment, seller }) {
    return <AdvertismentCard price={advertisment.price} title={advertisment.title} geo={advertisment.geo} date={advertisment.date} rating={seller.rating} />
}
