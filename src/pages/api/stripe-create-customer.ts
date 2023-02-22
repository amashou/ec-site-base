


import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_API_SECRET_KEY, { apiVersion: '2020-08-27' })

type Data = {
    customer: any
    error: any
}


/// attach-card
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        const { email } = req.body
        if (!email) throw new Error('Not email.')
        const customer = await stripe.customers.create({ email })
        console.log(customer)
        res.status(200).json({ customer: customer, error: null })
    } catch (e) {
        console.log('error', e)
        res.status(200).json({ customer: null, error: e })
    }
}