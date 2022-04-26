import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
    const customer = await stripe.customers.create({
        email: 'jacealex151@gmail.com',
    });
})();   