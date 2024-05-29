import { CardComponent } from "../components/Cardcomponents.js";
import { products } from "../data/product.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  
  .map((product) => (renderArea.innerHTML += CardComponent(product)));
