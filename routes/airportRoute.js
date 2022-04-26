import express from "express"
import { getAllAirports } from "../controller/AirportController.js"

const router = express.Router()

// GET ROUTE [AIRPORT]
router.get("/airport", getAllAirports)

export default router