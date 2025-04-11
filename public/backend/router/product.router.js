import express from "express";
import createProduct from "../controller/product.controller.js";
import deleteProduct from "../controller/deleteproduct.controller.js";
import patchProduct from "../controller/patchproduct.controller.js";
import getProduct from "../controller/getproduct.controller.js";
import message from "../controller/message.controller.js";
import getindProduct from "../controller/getind.controller.js";
const router=express()

router.get('/',getProduct)
router.post('/',createProduct)
router.get('/:id',getindProduct)
router.delete('/:id',deleteProduct)
router.patch('/:id',patchProduct)
router.post('/message',message)
export default router