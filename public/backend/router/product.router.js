import express from "express";
import createProduct from "../controller/product.controller.js";
const router=express()

router.get('/', async (res,req)=>{
    res.send('alla produkter');
})
router.post('/',createProduct)

router.delete('/')
router.patch('/')
router.post('/meddelande')
export default router