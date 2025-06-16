// Product data
        const products = [
            { id: 1, name: "Diamond Necklace", price: 1299.99, emoji: "💎" },
            { id: 2, name: "Gold Earrings", price: 599.99, emoji: "✨" },
            { id: 3, name: "Silver Bracelet", price: 299.99, emoji: "⚡" },
            { id: 4, name: "Ruby Ring", price: 899.99, emoji: "💍" },
            { id: 5, name: "Pearl Pendant", price: 449.99, emoji: "🌟" },
            { id: 6, name: "Sapphire Brooch", price: 699.99, emoji: "💫" }
        ];

        // Cart data
        let cart = [];

        // DOM elements
        const productsGrid = document.getElementById('productsGrid');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartSummary = document.getElementById('cartSummary');
        const checkoutSection = document.getElementById('checkoutSection');
        const notification = document.getElementById('notification');
        const placeOrderBtn = document.getElementById('placeOrderBtn');
        const customerForm = document.getElementById('customerForm');

        // Load products
        function loadProducts() {
            productsGrid.innerHTML = products.map(product => `
                <div class="product-card">
                    <div class="product-image">${product.emoji}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart ✨
                    </button>
                </div>
            `).join('');
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
            showNotification('success', '${product.name} added to cart! 🎉');
        }

        // Update cart display
        function updateCart() {
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛍️</div>
                        <p>Your cart is empty</p>
                        <p>Add some beautiful jewelry to get started!</p>
                    </div>
                `;
                cartSummary.style.display = 'none';
                checkoutSection.style.display = 'none';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.emoji} ${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                        </div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                `).join('');
                cartSummary.style.display = 'block';
                checkoutSection.style.display = 'block';
            }

            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = '${totalItems} $totalItems{totalItems !== 1 ?  : "}';

            // Update summary
            updateSummary();
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            const item = cart.find(item => item.id === productId);
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showNotification('info', '${item.name} removed from cart');
        }

        // Update summary
        function updateSummary() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.08;
            const shipping = subtotal > 0 ? 15.00 : 0;
            const total = subtotal + tax + shipping;

            document.getElementById('subtotal').textContent = '$${subtotal.toFixed(2)}';
            document.getElementById('tax').textContent = '$${tax.toFixed(2)}';
            document.getElementById('shipping').textContent = '$${shipping.toFixed(2)}';
            document.getElementById('total').textContent = '$${total.toFixed(2)}';
        }

        // Show notification
        function showNotification(type, message) {
            notification.className = 'notification ${type} show';
            notification.textContent = message;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Place order
        placeOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Validate form
            const form = customerForm;
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Get form data
            const customerData = {
                name: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                phone: document.getElementById('customerPhone').value,
                address: document.getElementById('customerAddress').value,
                paymentMethod: document.getElementById('paymentMethod').value
            };

            // Simulate order processing
            placeOrderBtn.disabled = true;
            placeOrderBtn.textContent = 'Processing Order...';

            setTimeout(() => {
                // Clear cart
                cart = [];
                updateCart();
                
                // Reset form
                form.reset();
                
                // Show success message
                showNotification('success', 'Order placed successfully! 🎉 Thank you for your purchase!');
                
                // Reset button
                placeOrderBtn.disabled = false;
                placeOrderBtn.textContent = 'Place Order 💎';
                
                // Log order details (in real app, this would be sent to server)
                console.log('Order placed:', {
                    customer: customerData,
                    items: cart,
                    timestamp: new Date().toISOString()
                });
                
            }, 2000);
        });

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCart();
        });