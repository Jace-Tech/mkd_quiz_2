import express from "express"
import { getFocast } from "../controller/WeatherController.js"

const router = express.Router()

// POST ROUTE [ORDER] 
router.get("/:location", getFocast)

export default router