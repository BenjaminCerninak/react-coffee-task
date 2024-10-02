import { coffeeProductList } from "./coffeeProductList";
import "./styles.css";
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

  // List of filter objects
  const filters = [
    {
      label: "Podle země původu",
      options: [
        { label: "Brazílie", value: "Brazil" },
        { label: "Costa Rica", value: "Costa Rica" },
        { label: "Vietnam", value: "Vietnam" },
      ],
      selectedValue: originCountry,
      onChange: setOriginCountry,
    },
    {
      label: "Podle typu kávy",
      options: [
        { label: "Robusta", value: "Robusta" },
        { label: "Arabica", value: "Arabica" },
      ],
      selectedValue: coffeeTypeFilterValue,
      onChange: setCoffeeTypeFilterValue,
    },
    {
      label: "Podle měny",
      options: [
        { label: "CZK", value: "CZK" },
        { label: "USD", value: "USD" },
      ],
      selectedValue: currency,
      onChange: setCurrency,
    },
    {
      label: "Seřadit podle ceny",
      options: [
        { label: "Od nejnižší ceny", value: "asc" },
        { label: "Od nejvyšší ceny", value: "desc" },
      ],
      selectedValue: sortPrice,
      onChange: setSortPrice,
    },
  ];

  return (
    <div>
      <SortField filters={filters} />
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
