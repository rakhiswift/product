
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";
 
const Product = () => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products); 
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.title}
          image={product.thumbnail} 
        />
      ))}
    </div>
  );
};

export default Product;
