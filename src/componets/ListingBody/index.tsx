/* eslint-disable @typescript-eslint/ban-types */
import Filter from "../Filter";
import Listing from "../Listing";
import * as productService from "../../service/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  function handleFilter(minValue: number, maxValue: number) {
    setProducts(productService.findByPrice(minValue, maxValue));
  }

  useEffect(() => {
    setProducts(productService.findByPrice(0, Number.MAX_VALUE));
    
  }, []);

  return (
    <main>
      <Filter onFilter={handleFilter} />
      <Listing products={products} />
    </main>
  );
}
