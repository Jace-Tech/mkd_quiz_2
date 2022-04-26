import express from "express"
import { addOrder, getOrder } from "../controller/OrderController.js"

const router = express.Router()

// POST ROUTE [ORDER] 
router.post("/", addOrder)

// GET ROUTE [ORDER] 
router.get("/:id", getOrder)

export default router