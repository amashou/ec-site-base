


import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_API_SECRET_KEY, { apiVersion: '2020-08-27' })

type Data = {
    paymentMethods: any
    error: any
}


/// attach-card
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { customerId } = req.body
        if (!customerId) throw new Error('Not customerId.')
        console.log('customerid', customerId)

        const paymentMethods = await stripe.paymentMethods.list({
            customer: customerId,
            type: 'card',
        });
        console.log('paymentMethods', paymentMethods)
        res.status(200).json({ paymentMethods: paymentMethods.data, error: null })
    } catch (e) {
        console.log('error', e)
        res.status(200).json({ paymentMethods: null, error: e })
    }
}