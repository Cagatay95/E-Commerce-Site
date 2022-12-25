import headerFunc from "./header.js";
import productsFunc from "./product.js";
import searchFunc from "./search.js";

// ??? ----------

// ! add product to localStorage start

(async function () {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();
  
    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    productsFunc();
    searchFunc(data);
  })();
  
// ! add product to localStorage end


// ! add cartItems to localStorage start

const products = localStorage.getItem("products");

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";

// ! add cartItems to localStorage end