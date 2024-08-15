import { coffeeProductList } from "./coffeeProductList";

import { useState } from "react";
import { ListOfProducts } from "./ListOfProducts";
import { SearchField } from "./SearchField";
import { SortField } from "./SortField";

export default function App() {
  const [productName, setProductName] = useState("");

  const [coffeeProductsToRenderArr, setCoffeeProductsToRenderArr] = useState([
    ...coffeeProductList,
  ]);

  const [originCountry, setOriginCountry] = useState("");
  const [coffeeTypeFilterValue, setCoffeeTypeFilterValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [sortPrice, setSortPrice] = useState("asc");

  const filteredList = coffeeProductsToRenderArr.filter(
    (coffee) =>
      (coffeeTypeFilterValue ? coffee.type === coffeeTypeFilterValue : true) &&
      (originCountry ? coffee.country === originCountry : true) &&
      (currency ? coffee.currency === currency : true) &&
      (productName
        ? coffee.name.toLowerCase().includes(productName.toLowerCase())
        : true)
  );

  const finalFilteredList =
    sortPrice === "asc"
      ? filteredList.sort((a, b) => b.price - a.price)
      : sortPrice === "desc"
      ? filteredList.sort((a, b) => a.price - b.price)
      : [...filteredList];

  return (
    <div>
      <SortField
        setOriginCountry={setOriginCountry}
        originCountry={originCountry}
        setCoffeeTypeFilterValue={setCoffeeTypeFilterValue}
        coffeeTypeFilterValue={coffeeTypeFilterValue}
        setCoffeeProductsToRenderArr={setCoffeeProductsToRenderArr}
        coffeeProductsToRenderArr={coffeeProductsToRenderArr}
        currency={currency}
        setCurrency={setCurrency}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
      <SearchField
        setCoffeeProductsToRenderArr={setCoffeeProductsToRenderArr}
        productName={productName}
        setProductName={setProductName}
        coffeeProductsToRenderArr={coffeeProductsToRenderArr}
      />
      <ListOfProducts
        finalFilteredList={finalFilteredList}
        coffeeProductsToRenderArr={coffeeProductsToRenderArr}
      />
    </div>
  );
}
