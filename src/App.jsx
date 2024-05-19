import Star from './assets/svg/kid_star.svg?react'
import Button from './components/Button/Button'

function App() {
    return (
        <div className="p-8 h-full text-neutral-950 bg-neutral-100">
            <article className="flex flex-col gap-2 p-2 rounded-3xl from-white to-neutral-500/20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]">
                <div className="h-32 relative rounded-2xl bg-neutral-300 p-2">
                    <div className="w-full absolute bottom-0 flex gap-4 p-2 justify-center">
                        {Array.from(Array(4).keys()).map((i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 ${i == 0 ? 'bg-neutral-400' : 'bg-white'} rounded-full`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <div className="self-stretch basis-0 grow shrink flex flex-col gap-3 items-start p-4 rounded-2xl bg-white">
                        <div className="p-0 min-h-0 flex px-2 py-1 border-neutral-900 rounded-full border-[2.5px]">
                            <span className="leading-none h-[.80rem] text-sm font-['Inter'] font-bold">
                                14 880 ₽
                            </span>
                        </div>
                        <h3 className="leading-4 text-sm font-bold">
                            Видеокарта Geforce RTX 1488
                        </h3>
                        <p className="self-stretch basis-0 grow shrink bg-clip-text bg-gradient-to-b from-black from-25% to-transparent text-transparent leading-4 text-xs text-ellipsis overflow-hidden">
                            B пpодaжe тoпoвaя видеокартa в испoлнение PАLIT NVIDIA RТХ 2060, 6gb пaмяти. Пo тecтам показываeт отличныe результaты, система оxлaждения в пoлнейшем пopядкe! Cоcтояние идеaльнoe внeшнe и техничeски, и пo еe pабoтe сейчас, замeна нe трeбуетcя
OПЛAТA HАЛИЧHЫМИ !!!
Скупка, выкуп, обмен ,компьютерной техники с доплатой в обе стороны.
С 1 СЕНТЯБРЯ АВИТО ДОСТАВКА ЗА ОТПРАВКУ ЛЮБОГО ТОВАРА ПРОДАВЦОМ БЕРЕТ +5% к ЦЕНЕ. ЛЮБАЯ ПОКУПКА В МОЁМ ПРОФИЛЕ АВИТО ДОСТАВКОЙ +5% к ЦЕНЕ. Убедительная просьба, перед тем как заказать товар рассчитайте стоимость товара с наценкой 5% процентов. Отправка по полной предоплате без наценки авито 5%
                        </p>
                        <div className="leading-none flex flex-col gap-1 text-neutral-500 text-xs">
                            <span>Москва, Лефортово</span>
                            <span>5 января 14:47</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white">
                            <div className="flex items-center gap-1.5">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src="https://dummyimage.com/500"
                                    alt="Фото продавца"
                                />
                                <div className="flex flex-col gap-1.5 leading-none text-xs">
                                    <span className="whitespace-nowrap">
                                        Алексей Ефанов
                                    </span>
                                    <div className="flex gap-1">
                                        {Array.from(Array(5).keys()).map(
                                            (i) => (
                                                <Star
                                                    width={12}
                                                    height={12}
                                                    key={i}
                                                />
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex text-xs justify-between items-center">
                                <span>
                                    <b>13</b> сделок
                                </span>
                                <div className="w-0.5 h-2 bg-neutral-200 rounded-full"></div>
                                <span>
                                    <b>4</b> отзыва
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2 p-4 rounded-2xl bg-white">
                            <Button className="w-full">Позвонить</Button>
                            <Button variant="light" className="w-full">
                                Написать
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default App
