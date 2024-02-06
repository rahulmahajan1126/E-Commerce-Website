// Get the cart count element
const cartCount = document.getElementById("cart-count");

// Get all the add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Initialize the cart count
let count = 0;

// Add click event listener to each add to cart button
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Increment the count
        count++;
        // Update the cart count text
        cartCount.textContent = count;
    });
});
