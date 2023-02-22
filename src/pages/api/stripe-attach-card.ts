


import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_API_SECRET_KEY, { apiVersion: '2020-08-27' })

type Data = {
    paymentMethod: any
    error: any
}

/// attach-card
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { customerId, paymentMethodId } = req.body

        if (!paymentMethodId) throw new Error('Not paymentMethodId.')
        console.log(customerId, paymentMethodId)
        const paymentMethod = await stripe.paymentMethods.attach(
            paymentMethodId,
            { customer: customerId }
        );
        res.status(200).json({ paymentMethod, error: null })
    } catch (e) {
        console.log('error', e)
        res.status(200).json({ paymentMethod: null, error: e })
    }

}