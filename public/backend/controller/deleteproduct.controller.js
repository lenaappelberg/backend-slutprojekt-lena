import Products from "../models/product.model";
const deleteProduct=async (params) => {
    await Products.deleteOne
}
export default deleteProduct