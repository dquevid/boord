import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function App() {
    const outlet = useOutlet()
    const location = useLocation()

    return (
        <>
            <div>
                <SwitchTransition>
                    <CSSTransition key={location.pathname} classNames="page" timeout={300}>
                        {outlet}
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    )
}
