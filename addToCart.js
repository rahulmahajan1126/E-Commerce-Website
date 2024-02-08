document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const quantityControl = document.querySelector('.quantity-control');
    const productQuantity = document.querySelector('.product-quantity');
    const cartCount = document.getElementById('cart-count');

    // Function to update cart count
    function updateCartCount(quantity) {
        cartCount.textContent = quantity; // Update cart count
    }

    // Function to increment quantity
    function incrementQuantity() {
        let quantity = parseInt(productQuantity.textContent);
        quantity++;
        productQuantity.textContent = quantity;
        updateCartCount(quantity);
    }
    
    // Function to decrement quantity
    function decrementQuantity() {
        let quantity = parseInt(productQuantity.textContent);
        if (quantity > 1) {
            quantity--;
            productQuantity.textContent = quantity;
            updateCartCount(quantity);
        } else {
            // If quantity is 1, show the "Add to Cart" button again
            addToCartBtn.style.display = 'block';
            quantityControl.style.display = 'none';
            updateCartCount(0); // Reset cart count
        }
    }

    addToCartBtn.addEventListener('click', function() {
        addToCartBtn.style.display = 'none';
        quantityControl.style.display = 'flex';
        productQuantity.textContent = '1'; // Set initial quantity to 1
        updateCartCount(1); // Set initial cart count to 1
    });

    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    
    plusBtn.addEventListener('click', incrementQuantity);
    minusBtn.addEventListener('click', decrementQuantity);
});
