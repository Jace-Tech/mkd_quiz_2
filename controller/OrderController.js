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

export const getOrder = async (req, res) => {
    const { id } = req.params
    try{
        const order = await Order.findOne({
            where: {
                stripe_id: id
            }
        })
        res.status(200).json(order)
    } 
    catch(err) {
        res.status(500).json({error: err.message})
    }
}