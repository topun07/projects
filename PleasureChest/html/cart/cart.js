document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName = this.dataset.productName;
      const productPrice = parseFloat(this.dataset.price || 0); // Ensure price is parsed
      const productTitle = productTitles[productName] || productName; // Fetch title or fallback to name
      const product = {
        name: productName,
        title: productTitle,
        price: productPrice,
      };

      let cartItems = [];
      try {
        cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      } catch (error) {
        console.error("Error parsing cartItems:", error);
        cartItems = [];
      }

      // Add the product to the cart
      cartItems.push(product);

      // Save the updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Update the cart bubble
      updateCartBubble(cartItems);

      alert(`${productTitle} added to cart!`);
    });
  });

  // Update the cart bubble count on page load
  let cartItems = [];
  try {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  } catch (error) {
    console.error("Error parsing cartItems:", error);
  }
  updateCartBubble(cartItems);

  function updateCartBubble(cartItems) {
    const cartCountElement = document.getElementById("cart-count");
    if (!cartCountElement) {
      console.warn("Cart count element not found in the DOM.");
      return;
    }
    cartCountElement.textContent = cartItems.length;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("cart.html")) {
    const cartList = document.getElementById("cart-list");
    const totalAmountElement = document.getElementById("total-amount");

    let cartItems = [];
    try {
      cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    } catch (error) {
      console.error("Error parsing cartItems:", error);
    }

    function displayCartItems() {
      cartList.innerHTML = ""; // Clear the cart list

      let total = 0; // Initialize total price

      cartItems.forEach((item) => {
        // Validate price
        const price = typeof item.price === "number" ? item.price : 0;

        // Validate title
        const title = item.title || "Unknown Item";

        // Create and append list item
        const listItem = document.createElement("li");
        listItem.textContent = `${title}: $${price.toFixed(2)}`;
        cartList.appendChild(listItem);

        // Add to total
        total += price;
      });

      totalAmountElement.textContent = total.toFixed(2); // Update total price
    }

    displayCartItems();
  }
});
