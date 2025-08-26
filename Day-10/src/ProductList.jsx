import React from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    description: "Powerful laptop for coding and design.",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 30000,
    description: "Latest smartphone with amazing features.",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    description: "Noise-cancelling over-ear headphones.",
    img: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">🛍️ Product Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 p-6 text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-blue-600 font-bold mb-2">₹{product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
