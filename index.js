import express from 'express'
import cors from 'cors'

import airportRoute from "./routes/airportRoute.js"

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use(express.static("public"))


// ROUTES
app.use("/api/airport", airportRoute)
app.get("/", (req, res) => {
    res.send("<h1>Quiz - 2 Live</h1>")
})


export default app
