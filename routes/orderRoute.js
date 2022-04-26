import express from "express"
import { addOrder } from "../controller/OrderController.js"

const router = express.Router()

// POST ROUTE [ORDER] 
router.post("/", addOrder)

export default router