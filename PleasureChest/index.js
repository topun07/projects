// common.js - Shared functionality

function getProductPrice(name, productData, type = "msrp") {
  return productData[name] ? productData[name][type] : null;
}

function addItemToCart(name, price) {
  const title = productTitles[name] || name; // Get title or fallback to default name
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name, title, price }); // Store title in the cart item
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartBubble();
}

function updateCartBubble() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cartItems.length;
  }
}

function updateProductDetails(productData) {
  // Update Prices
  const priceElements = document.querySelectorAll(".product-price");
  priceElements.forEach((element) => {
    const productName = element.dataset.productName;
    const price = getProductPrice(productName, productData);
    if (price !== null) {
      element.textContent = price.toFixed(2);
    }
  });

  // Update Discounts
  const discountElements = document.querySelectorAll(".product-discounted");
  discountElements.forEach((element) => {
    const productName = element.dataset.productName;
    const discounted = getProductPrice(productName, productData, "discounted");
    if (discounted !== null) {
      element.textContent = discounted.toFixed(2);
    }
  });

  // Update SKUs
  const skuElements = document.querySelectorAll(".product-sku");
  skuElements.forEach((element) => {
    const productName = element.dataset.productName;
    const sku = productData[productName]?.sku;
    if (sku) {
      element.textContent = sku;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartBubble();

  // Back button functionality
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }

  // Attach event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName = this.dataset.productName;
      const productPriceElement = document.querySelector(
        `.product-price[data-product-name='${productName}']`
      );
      if (productPriceElement) {
        const price = parseFloat(productPriceElement.textContent);
        addItemToCart(productName, price);
      }
    });
  });

  if (window.location.pathname.includes("cart.html")) {
    const cartList = document.getElementById("cart-list");
    const totalAmountElement = document.getElementById("total-amount");

    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    function displayCartItems() {
      cartList.innerHTML = ""; // Clear the cart list

      let total = 0; // Variable to store the total price

      cartItems.forEach((item) => {
        // Check if productTitles is defined and fetch title
        const title =
          (typeof productTitles !== "undefined" && productTitles[item.name]) ||
          item.name ||
          "Unknown Item";

        // Validate price and fallback to 0 if undefined
        const price = typeof item.price === "number" ? item.price : 0;

        // Create a new list item for the cart
        const listItem = document.createElement("li");
        listItem.textContent = `${title}: $${price.toFixed(2)}`;
        cartList.appendChild(listItem);
      });

      // Display the total amount
      totalAmountElement.textContent = total.toFixed(2);
    }

    // Call the display function to update the cart
    displayCartItems();
  }
});
