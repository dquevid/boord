import { GlobalMenuLayout } from '@/entities/GlobalMenuLayout'

import Plus from '@/shared/assets/svg/plus.svg?react'
import Boord from '@/shared/assets/svg/boord.svg?react'

export default function GlobalMenu() {
    return (
        <GlobalMenuLayout
            items={[
                <Plus className="mix-blend-difference stroke-white" width={32} height={32} />,
                <Boord className="mix-blend-difference fill-white" width={32} height={32} />,
                <img
                    className="relative rounded-full"
                    width={32}
                    height={32}
                    src="https://dummyimage.com/500"
                    alt=""
                />,
            ]}
        />
    )
}
