import { PremialAdvertisment } from '@/widgets/PremialAdvertisment'
import { Advertisment } from '@/widgets/Advertisment'

export default function App() {
    const sellers = [
        {
            id: 0,
            name: 'Алексей Ефанов',
            rating: 3,
            sales: 13,
            reviews: 4,
        },
    ]

    const advertisments = [
        {
            title: 'Видеокарта GeForce RTX 1488',
            description:
                'B пpодaжe тoпoвaя видеокартa в испoлнение PАLIT NVIDIA RТХ 2060, 6gb пaмяти. Пo тecтам показываeт отличныe результaты, система оxлaждения в пoлнейшем пopядкe! Cоcтояние идеaльнoe внeшнe и техничeски, и пo еe pабoтe сейчас, замeна нe трeбуетcя OПЛAТA HАЛИЧHЫМИ !!! Скупка, выкуп, обмен ,компьютерной техники с доплатой в обе стороны. С 1 СЕНТЯБРЯ АВИТО ДОСТАВКА ЗА ОТПРАВКУ ЛЮБОГО ТОВАРА ПРОДАВЦОМ БЕРЕТ +5% к ЦЕНЕ. ЛЮБАЯ ПОКУПКА В МОЁМ ПРОФИЛЕ АВИТО ДОСТАВКОЙ +5% к ЦЕНЕ. Убедительная просьба, перед тем как заказать товар рассчитайте стоимость товара с наценкой 5% процентов. Отправка по полной предоплате без наценки авито 5%',
            price: Intl.NumberFormat('ru-RU').format(14880) + ' ₽',
            seller_id: 0,
            geo: 'Москва, Лефортово',
            date: '5 января 14:47',
            isPremial: true,
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4 p-8 h-full overflow-scroll no-scrollbar text-neutral-950 bg-neutral-100">
                <PremialAdvertisment advertisment={advertisments[0]} seller={sellers[0]} />
                {Array.from(Array(5).keys()).map(i => (
                    <div className="flex gap-3">
                        <Advertisment advertisment={advertisments[0]} seller={sellers[0]} />
                        <Advertisment advertisment={advertisments[0]} seller={sellers[0]} />
                    </div>
                ))}
            </div>
        </>
    )
}
