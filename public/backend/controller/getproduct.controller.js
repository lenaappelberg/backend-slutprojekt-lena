import Products from "../models/product.model";
const getProduct=async () => {
 await Products.findOne({id})   
}
export default getProduct