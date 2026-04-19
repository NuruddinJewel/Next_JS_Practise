import Product from '@/Components/Products';
import React from 'react';

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products',
        { cache: 'force-cache' }
    );
    return res.json();
}
// const getProducts = async () => {
//     const res = await fetch('http://localhost:5000/products',
//         { next: { revalidate: 20 } }
//     );
//     return res.json();
// }





const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products : {products.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                    >


                    </Product>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;

// import Product from '@/Components/Products';
// import React from 'react';

// const getProducts = async () => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`,
//             { next: { revalidate: 20 } }
//         );
//         if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
//         return res.json();
//     } catch (err) {
//         console.error('Failed to fetch products:', err);
//         return [];
//     }
// };

// const ProductsPage = async () => {
//     const products = await getProducts();

//     if (!products?.length) {
//         return <div>No products found.</div>;
//     }

//     return (
//         <div>
//             <h2>Products: {products.length}</h2>
//             <div className='grid grid-cols-3 gap-4'>
//                 {products.map(product => (
//                     <Product key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;