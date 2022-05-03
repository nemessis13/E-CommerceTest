import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.length > 0 ? (
        productos.map((producto) => <Item/>)
      ) : (
        <h1> Cargando productos . . . </h1>
      )}
    </div>
  );
};

export default ItemList;
