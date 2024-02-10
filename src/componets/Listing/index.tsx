/* eslint-disable @typescript-eslint/ban-types */
import { useContext, useEffect } from "react";
import { ProductDTO } from "../../models/product";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  
  const {setContextProductCount} = useContext(ContextProductCount);

 

  useEffect(()=>{
    setContextProductCount(products.length);
  });

  return (
    <div className="dsf-container dsf-listing-card">
      {products?.map((item) => (
        <div key={item.id} className="dsf-items-listing">
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <h4>R$ {item.price.toFixed(2)}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
