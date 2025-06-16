//for search bar//
document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!query) return;

    // Simple keyword redirection (you can expand this logic)
    if (query.includes("bracelet") || query.includes("braclet")) {
        window.location.href = "Braclet.html";
    }
    else if (query.includes("necklace") || query.includes("necklet") || query.includes("necklets")) {
        window.location.href = "Neclets.html";
    } else if (query.includes("ring")) {
        window.location.href = "Rings.html";
    } else if (query.includes("earring")) {
        window.location.href = "Earrings.html";
    } else if (query.includes("featured")) {
        window.location.href = "Featured.html";
    } else if (query.includes("best seller")) {
        window.location.href = "best sellers.html";
    } else {
        alert("No results found for: " + query);
    }
});



//cart header click event//

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(img, title, price) {
  cart.push({ img, title, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showMessage(`"${title}" has been added to cart ✅`);
}

function updateCartCount() {
  const countElement = document.getElementById('cart-count');
  if (countElement) {
    countElement.innerText = cart.length;
  }
}

function showMessage(message) {
  const messageBox = document.getElementById('message');
  if (messageBox) {
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 2000);
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});








//for image added to cart msg//
function showMessage(message) {
  const msgBox = document.getElementById('message');
  msgBox.textContent = message;
  msgBox.style.display = 'block';
  setTimeout(() => {
    msgBox.style.display = 'none';
  }, 2000);
}

// Remove item from cart
function removeFromCart(index) {
  const removedItem = cart.splice(index, 1)[0];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  showMessage(`"${removedItem.title}" removed from cart ❌`);
}

// Buy Now
function buyNow(index) {
  const buyItem = cart[index];
  localStorage.setItem('buy-now', JSON.stringify(buyItem));
  window.location.href = 'order.html';
}

cartList.innerHTML += `
  <div class="cart-item">
    <img src="${item.img}" alt="${item.title}" width="100">
    <h3>${item.title}</h3>
    <p>$${item.price}</p>
    <button onclick="removeFromCart(${index})">Remove</button>
    <button onclick="buyNow(${index})">Buy Now</button> <!-- ✅ This one -->
  </div>
`;





// Render cart items
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  if (cart.length === 0) {
    cartList.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    cartList.innerHTML += `
      <div class="cart-item" style="margin-bottom: 20px; border: 1px solid #ccc; padding: 10px;">
        <img src="${item.img}" alt="${item.title}" width="100">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
        <button onclick="buyNow(${index})">Buy Now</button>
      </div>
    `;
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', renderCart);




//for login//
function toggleForm() {
  document.getElementById("login-form").classList.toggle("hidden");
  document.getElementById("register-form").classList.toggle("hidden");
}

