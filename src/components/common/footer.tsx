import Image from "next/image"
import { useRouter } from "next/router"

const Footer = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-900 w-screen bottom-0 pb-10 pt-12">
            <div className="max-w-5xl mx-auto text-gray-100 text-center">
                <div className="flex justify-center mb-8">
                    <Image className="mx-4" src='/forbes-white-logo.png' width={'120'} height='40' alt='under license from forbes' />
                    <Image className="mx-4" src='/oceans-white-logo.png' width={'120'} height='40' alt='under license from ocean' />
                </div>
                <ul className="flex justify-center pb-8 grid grid-cols-6 sm:grid-cols-5 gap-y-4">
                    <li onClick={() => router.push('/')} className="hover:text-gray-400 hover:cursor-pointer px-2 border-r border-gray-100 col-span-2 sm:col-span-1">お知らせ</li>
                    <li onClick={() => router.push('/')} className="hover:text-gray-400 hover:cursor-pointer px-2 border-r border-gray-100 col-span-2 sm:col-span-1">イベント</li>
                    <li onClick={() => router.push('/')} className="hover:text-gray-400 hover:cursor-pointer px-2 sm:border-r border-gray-100 col-span-2 sm:col-span-1">広告掲載</li>
                    <li onClick={() => router.push('/')} className="hover:text-gray-400 hover:cursor-pointer px-2 border-r border-gray-100 col-span-3 sm:col-span-1">個人情報保護方針</li>
                    <li onClick={() => router.push('/')} className="hover:text-gray-400 hover:cursor-pointer px-2 col-span-3 sm:col-span-1">お問い合せ</li>
                </ul>
                <p className="text-xs">COPYRIGHT©----.All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer