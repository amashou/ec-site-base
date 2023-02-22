


import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_API_SECRET_KEY, { apiVersion: '2020-08-27' })

type Data = {
    result: any
    error: any
}


/// attach-card
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { paymentMethodId } = req.body
        if (!paymentMethodId) throw new Error('Not paymentMethodId.')
        const result = await stripe.paymentMethods.detach(paymentMethodId)
        console.log(result)
        res.status(200).json({ result, error: null })
    } catch (e) {
        console.log('error', e)
        res.status(200).json({ result: null, error: e })
    }
}