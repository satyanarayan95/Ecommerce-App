import Product from './model/productSchema.js';
import { products } from './constant/product.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;