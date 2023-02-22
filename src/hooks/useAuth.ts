import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export const useAuth = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const dispatchUser = async (_user: any) => {
        try {
        } catch (e) {
            console.error('Error', e)
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
        } catch (e) {
            console.error('Error', e)
        }
    }

    const signOut = async () => {
        try {
        } catch (e) {
            console.error('Error', e)
        }
    }
    return { signIn, dispatchUser, signOut }
}