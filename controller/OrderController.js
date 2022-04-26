import Order from '../model/Order.js'

export const addOrder = async (req, res) => {
    try{
        const order = await Order.create(req.body)
        res.status(200).json(order)
    } 
    catch(err) {
        res.status(500).json({error: err.message})
    }
}