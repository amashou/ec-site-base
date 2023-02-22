import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";
import { ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router";
import { useSelector } from "@/redux/store";
import { useAuth } from "@/hooks/useAuth";
import Loading from "./loading";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Drawer = (props: Props) => {
    const { open, setOpen } = props
    const router = useRouter()
    const currentUser = useSelector((state) => state.auth)
    const { signOut } = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    const handleRoute = (_link: Object) => {
        setOpen(false)
        router.push(_link)
    }

    const handleSignOut = async () => {
        setIsLoading(true)
        setOpen(false)
        await signOut()
        setIsLoading(false)
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="flex justify-between items-center pl-4 border-b border-gray-900 pb-6">
                                            <div className="flex flex-col">
                                                <button
                                                    type="button"
                                                    className="w-10"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <XMarkIcon className="h-8 w-8 mx-auto" aria-hidden="true" />
                                                </button>
                                                <p className="text-xs inline w-10">CLOSE</p>
                                            </div>
                                        </div>

                                        <div className="relative flex-1 px-4 sm:px-6">
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                {currentUser.status === 'UnAuthorized' ?
                                                    <div className="my-6">
                                                        <div className="flex flex-col items-center">
                                                            <button onClick={() => handleRoute('/signUp')} className="bg-accent-300 w-full text-white py-3 hover:opacity-60 duration-300">アカウント作成</button>
                                                            <p className="my-4">or</p>
                                                            <button onClick={() => handleRoute('/signIn')} className="border-accent-300 border w-full text-accent-300 py-3 hover:bg-accent-300 hover:text-white duration-300">ログイン</button>
                                                        </div>
                                                    </div>
                                                    : <>
                                                        <div className="border-b border-gray-500 py-6">
                                                            <div className="flex items-center hover:cursor-pointer" onClick={() => handleRoute('/mypage')}>
                                                                <UserIcon className='h-7' />
                                                                <p className="ml-4 font-medium">マイページ</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-b border-gray-500 py-6">
                                                            <div className="flex items-center hover:cursor-pointer" onClick={() => handleRoute('/cart')}>
                                                                <ShoppingCartIcon className='h-7' />
                                                                <p className="ml-4 font-medium">カートを見る</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                }
                                                <div className="py-6">

                                                    <ul>
                                                        <li className="font-medium mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">ホーム</li>
                                                        <li className="font-medium mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">オークション</li>
                                                        <li className="font-medium mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">抽選</li>
                                                        <li className="font-medium mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">Buy Now</li>
                                                    </ul>

                                                    <ul className="mt-12">
                                                        <li className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">お知らせ</li>
                                                        <li className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">イベント</li>
                                                        <li className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">広告掲載</li>
                                                        <li className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">個人情報保護方針</li>
                                                        <li className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">お問い合せ</li>
                                                    </ul>

                                                    <ul className="mt-12">
                                                        <li onClick={() => router.push('/admin')} className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">
                                                            管理者ページ
                                                        </li>
                                                    </ul>

                                                    <ul className="mt-12">
                                                        {(currentUser.status === 'Authorized' || currentUser.status === 'OnAuthorizing') &&
                                                            <li
                                                                onClick={handleSignOut}
                                                                className="mb-4 text-gray-700 hover:cursor-pointer hover:text-accent-300 hover:opacity-50 duration-300">ログアウト</li>
                                                        }
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
                {isLoading && <Loading />}
            </Dialog>
        </Transition.Root>
    )
}

export default Drawer