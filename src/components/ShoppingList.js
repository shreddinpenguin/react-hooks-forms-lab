import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function onSearchChange(e){
    setSearch(e.target.value)
    console.log(search)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const results = items.filter((item) => (
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  ))

  const itemsToDisplay = results.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        search={search}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
