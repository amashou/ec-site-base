


import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_API_SECRET_KEY, { apiVersion: '2020-08-27' })

type Data = {
    paymentIntent: any
    error: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { customerId, amount, description, username } = req.body

        let inputData: any = {
            amount: amount,
            currency: 'jpy',
            description: description,
            metadata: { username: username },
            capture_method: 'manual',
            setup_future_usage: "off_session",
        }
        if (customerId) inputData['customer'] = customerId

        // customerIdがなくてもゲスト購入ができる。
        const paymentIntent = await stripe.paymentIntents.create(inputData)
        console.log(paymentIntent)
        res.status(200).json({ paymentIntent, error: null })
    } catch (e) {
        console.log('error', e)
        res.status

    }
}