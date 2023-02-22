import { Bars3Icon, CubeIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const hoverStyle = 'hover:cursor-pointer duration-300 hover:text-gray-700'

export default function Dashboard({ children }: Props) {
    const router = useRouter()
    const handleMenuClick = (link: Object) => {
        router.push(link)
    }

    return (
        <div className="h-screen w-screen flex overflow-hidden">
            <div className="h-full w-60 bg-gray-800 text-gray-200 px-2">
                <ul className="mt-11">
                    <li onClick={() => handleMenuClick('/admin/')} className={`${hoverStyle} flex items-center py-3 border-b`}>
                        <Bars3Icon className='h-6' />
                        <span className="pl-1">HOME</span>
                    </li>
                    <li onClick={() => handleMenuClick('/admin/product')} className={`${hoverStyle} flex items-center py-3 border-b`}>
                        <CubeIcon className='h-6' />
                        <span className="pl-1">PRODUCT</span>
                    </li>
                    <li onClick={() => handleMenuClick('/admin/order')} className={`${hoverStyle} flex items-center py-3 border-b`}>
                        <ShoppingCartIcon className='h-6' />
                        <span className="pl-1">ORDER</span>
                    </li>
                    <li onClick={() => handleMenuClick('/admin/user')} className={`${hoverStyle} flex items-center py-3 border-b`}>
                        <UserCircleIcon className='h-6' />
                        <span className="pl-1">USER</span>
                    </li>
                </ul>
                <ul className="mt-11">
                    <li onClick={() => handleMenuClick('/')} className={`${hoverStyle} flex items-center py-3`}>
                        <span className="pl-1">SITE TOPへ</span>
                    </li>
                </ul>
            </div>
            <div className="h-full w-full bg-gray-50">
                <div className="border-b border-gray-300 py-4">
                    <h1 className="font-bold text-xl pl-6">SUPERLAND</h1>
                </div>

                <div className="overflow-scroll h-full">
                    {children}
                </div>

            </div>
        </div>
    )
}