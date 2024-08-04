import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/cart/productSlice";
import { addToCart } from "../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24 bg-black text-white pt-4">
      <div className="grid grid-cols-6 gap-8">
        {items.map((p) => (
          <div key={p.id} className="card bg-gray-800 p-3 rounded-lg">
            <img
              src={p.image}
              className="rounded-lg mb-4 w-full h-48 object-cover"
              alt=""
            />
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-full"
              onClick={() => dispatch(addToCart(p))}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
