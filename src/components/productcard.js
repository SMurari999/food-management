import React from "react";

const ProductCard = ({ element, deleteProduct }) => {
  return (
    <div>
    <div className="flex flex-col card border-secondary max-w-xs mx-auto h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
      <div className="card-header bg-transparent border-success font-bold flex flex-col justify-center items-center p-[10px]">
        {element.name}
        
      
      <div className="card-body text-secondary">
        <div className="card-text">Quantity : {element.quantity}</div>
      </div>
      </div>
    </div>
    <button
            onClick={() => {
                deleteProduct(element.name);
            }}
            type="button"
            className="bg-green-500 ml-[112px] text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
          >
            Delete Product <i className="bi bi-box-arrow-right ml-2"></i>
          </button>
    </div>
  );
};

export default ProductCard;
