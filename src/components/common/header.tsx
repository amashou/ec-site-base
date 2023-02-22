import { useDispatch } from "react-redux"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
    const dispatch = useDispatch()

    const [drawerOpne, setDrawerOpen] = useState(false)
    const router = useRouter()

    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    return (
        <div className="h-12 fixed top-0 left-0 w-screen bg-white z-10">
            <div className='h-full flex justify-between items-center sm:mx-w-8xl mx-auto px-6'>
                <h1 className="font-bold text-2xl hover:cursor-ponter" onClick={() => router.push('/')}>TEAM NAME</h1>
                <div>
                    <Bars3Icon className='h-8 hover:cursor-pointer' onClick={handleDrawerOpen} />
                </div>
            </div>
            {drawerOpne && <DrawerMenu />}
        </div >
    )
}