
import Router, { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Dashboard from './admin/dashboard'
import Footer from './footer'
import Header from './header'

type LayoutProps = Required<{
    readonly children: ReactElement
}>

export default function Layout({ children }: LayoutProps) {
    const router = useRouter()

    return (
        <>
            {router.pathname.includes('admin') ?
                <>
                    <Dashboard>
                        {children}
                    </Dashboard>
                </> :
                <>
                    <Header />
                    {children}
                    {router.pathname === '/' && <Footer />}
                </>

            }
        </>
    )
}