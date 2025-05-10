// import { useEffect, useState } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState(0); 

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data.products));
//   }, []);

  
//   const handleAddToCart = () => {
//     setCart(prevCart => prevCart + 1);
//   };

//   return (
//     <div>
//       <h1>Dummy Products</h1>
      

//       <ul style={{ listStyle: 'none',  display: 'flex',  gap: '40px' }}>
//         {  products.map(product => (
//           <li key={product.id} style={{ marginBottom: '20px', border: '2px solid #ccc', padding: '10px', width: '200px' }}>
//             <img 
//               src={product.thumbnail} 
//               alt={product.title} 
//               style={{ width: '150px', height: '150px', objectFit: 'cover', display: 'block', marginBottom: '10px' }} 
//             />
//             <strong>{product.title}</strong><br />
//             ${product.price}
//             <br />
//             <button onClick={handleAddToCart} style={{ marginTop: '10px' }}>Add to Cart</button>
//             <p style={{ fontSize: '18px' }}>🛒 Cart: {cart}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;




import Product from './Product'

const App = () => {
  return (
    <div>
   <Product/>
    </div>
  )
}

export default App