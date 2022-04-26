import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()


export const getFocast = async (req, res) => {
    const { location } = req.params

    try {
        const request = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`)
        const data = request.data
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
    
}