const foodItems = [
  {
    id: 1,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.5,
    description: "Loaded with mozzarella and fresh herbs",
    image: "images/pizza.jpg"
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 149,
    rating: 4.3,
    description: "Juicy patty with melted cheese",
    image: "images/burger.jpg"
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    price: 199,
    rating: 4.7,
    description: "Creamy pasta with bacon and parmesan",
    image: "images/carbonara.jpg"
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Salad",
    price: 129,
    rating: 4.2,
    description: "Crisp romaine lettuce with Caesar dressing",
    image: "images/caesar-salad.jpg"
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 99,
    rating: 4.8,
    description: "Rich and fudgy chocolate brownie",
    image: "images/brownie.jpg"
  },
  {
    id: 6,
    name: "Grilled Chicken Sandwich",
    category: "Sandwich",
    price: 179,
    rating: 4.4,
    description: "Tender grilled chicken with fresh veggies",
    image: "images/grilled-chicken-sandwich.jpg"
  },
  {
    id: 7,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.6,
    description: "Classic pizza with fresh tomatoes and basil",
    image: "images/margherita-pizza.jpg"
  },
  {
    id: 8,
    name: "Veggie Wrap",
    category: "Wrap",
    price: 139,
    rating: 4.1,
    description: "Healthy wrap with assorted vegetables",
    image: "images/veggie-wrap.jpg"
  },
  {
    id: 9,
    name: "Tiramisu",
    category: "Dessert",
    price: 149,
    rating: 4.9,
    description: "Classic Italian dessert with coffee flavor",
    image: "images/tiramisu.jpg"
  },
  {
    id: 10,
    name: "Chicken Alfredo Pasta",
    category: "Pasta",
    price: 219,
    rating: 4.5,
    description: "Creamy Alfredo sauce with grilled chicken",
    image: "images/chicken-alfredo-pasta.jpg"
  },
  {
    id: 11,
    name: "Greek Salad",
    category: "Salad",
    price: 139,
    rating: 4.3,
    description: "Fresh salad with feta cheese and olives",
    image: "images/greek-salad.jpg"
  },
  {
    id: 12,
    name: "Vanilla Ice Cream",
    category: "Dessert",
    price: 89,
    rating: 4.7,
    description: "Classic vanilla ice cream scoop",
    image: "images/vanilla-ice-cream.jpg"
  },
  {
    id: 13,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 329,
    rating: 4.6,
    description: "Tender chicken with BBQ sauce",
    image: "images/bbq-chicken-pizza.jpg"
  },
  {
    id: 14,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 159,
    rating: 4.4,
    description: "Toasted bread topped with fresh avocado",
    image: "images/avocado-toast.jpg"
  },
  {
    id: 15,
    name: "Mango Smoothie",
    category: "Beverage",
    price: 119,
    rating: 4.5,
    description: "Refreshing smoothie made with ripe mangoes",
    image: "images/mango-smoothie.jpg"
  },
  {
    id: 16,
    name: "Chicken Caesar Wrap",
    category: "Wrap",
    price: 169,
    rating: 4.3,
    description: "Grilled chicken with Caesar dressing in a wrap",
    image: "images/chicken-caesar-wrap.jpg"
  },
  {
    id: 17,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    price: 199,
    rating: 4.8,
    description: "Creamy cheesecake topped with fresh strawberries",
    image: "images/strawberry-cheesecake.jpg"
  },
  {
    id: 18,
    name: "Veggie Burger",
    category: "Burger",
    price: 159,
    rating: 4.2,
    description: "Delicious burger with a veggie patty",
    image: "images/veggie-burger.jpg"
  },
  {
    id: 19,
    name: "Penne Arrabbiata",
    category: "Pasta",
    price: 189,
    rating: 4.5,
    description: "Spicy tomato sauce with penne pasta",
    image: "images/penne-arrabbiata.jpg"
  },
  {
    id: 20,
    name: "Caprese Salad",
    category: "Salad",
    price: 149,
    rating: 4.4,
    description: "Fresh mozzarella, tomatoes, and basil",
    image: "images/caprese-salad.jpg"
  },
  {
    id: 21,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    price: 169,
    rating: 4.6,
    description: "Rich chocolate cake with a molten center",
    image: "images/chocolate-lava-cake.jpg"
  },
  {
    id: 22,
    name: "Grilled Veggie Sandwich",
    category: "Sandwich",
    price: 159,
    rating: 4.3,
    description: "Fresh vegetables grilled and served in a sandwich",
    image: "images/grilled-veggie-sandwich.jpg"
  },
  {
    id: 23,
    name: "Margarita Mocktail",
    category: "Beverage",
    price: 129,
    rating: 4.4,
    description: "Tangy mocktail with margarita flavors",
    image: "images/margarita-mocktail.jpg"
  },
  {
    id: 24,
    name: "Buffalo Wings",
    category: "Appetizer",
    price: 179,
    rating: 4.5,
    description: "Crispy chicken wings tossed in spicy buffalo sauce",
    image: "images/buffalo-wings.jpg"
  },
  {
    id: 25,
    name: "Pancakes with Maple Syrup",
    category: "Breakfast",
    price: 149,
    rating: 4.7,
    description: "Fluffy pancakes drizzled with maple syrup",
    image: "images/pancakes-maple-syrup.jpg"
  },
  {
    id: 26,
    name: "Fruit Salad",
    category: "Dessert",
    price: 139,
    rating: 4.5,
    description: "A refreshing mix of seasonal fruits",
    image: "images/fruit-salad.jpg"
  },
  {
    id: 27,
    name: "Chicken Tikka Masala",
    category: "Main Course",
    price: 249,
    rating: 4.8,
    description: "Tender chicken in a creamy tomato sauce",
    image: "images/chicken-tikka-masala.jpg"
  },
  {
    id: 28,
    name: "Veggie Quesadilla",
    category: "Appetizer",
    price: 169,
    rating: 4.3,
    description: "Delicious quesadilla filled with fresh vegetables",
    image: "images/veggie-quesadilla.jpg"
  },
  {
    id: 29,
    name: "Lemonade",
    category: "Beverage",
    price: 99,
    rating: 4.6,
    description: "Refreshing lemonade with a hint of mint",
    image: "images/lemonade.jpg"
  },
  {
    id: 30,
    name: "Paneer Tika Frankie",
    category: "Wrap",
    price: 159,
    rating: 4.4,
    description: "Delicious frankie filled with paneer and spices",
    image: "images/paneer-tika-frankie.jpg"
  }
];

const container = document.getElementById("foodContainer");

function displayFood(items) {
  container.innerHTML = "";

  items.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">₹${item.price}</span>
      <span class="rating">⭐ ${item.rating}</span>
      <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
      <button class="add-to-wishlist-btn" data-id="${item.id}">Add to Wishlist</button>
    `;
    container.appendChild(card);
  });
}

if (container) {
  displayFood(foodItems);
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    const filteredItems = foodItems.filter(function(item) {
      return item.name.toLowerCase().includes(searchText);
    });
    displayFood(filteredItems);
  });
}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const selectedCategory = button.dataset.category;

    if (selectedCategory === "All") {
      displayFood(foodItems);
    } else {
      const filteredItems = foodItems.filter(function(item) {
        return item.category === selectedCategory;
      });
      displayFood(filteredItems);
    }
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

if (container) {
  container.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const itemId = Number(e.target.dataset.id);
      const existingItem = cart.find(function(cartItem) {
        return cartItem.id === itemId;
      });

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        const foodItem = foodItems.find(function(item) {
          return item.id === itemId;
        });
        cart.push({
          id: foodItem.id,
          name: foodItem.name,
          price: foodItem.price,
          image: foodItem.image,
          quantity: 1
        });
      }

      saveCart();
      updateCartCount();
      alert("Added to cart!");
    }
  });
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cartCount");
  if (cartCountElement) {
    let totalCount = 0;
    cart.forEach(function(item) {
      totalCount = totalCount + item.quantity;
    });
    cartCountElement.textContent = totalCount;
  }
}

updateCartCount();

function displayCart() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  cart.forEach(function(item) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <div class="quantity-controls">
        <button class="decrease-btn" data-id="${item.id}">−</button>
        <span>${item.quantity}</span>
        <button class="increase-btn" data-id="${item.id}">+</button>
      </div>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  let subtotal = 0;
  cart.forEach(function(item) {
    subtotal = subtotal + (item.price * item.quantity);
  });

  const deliveryCharge = 40;
  const grandTotal = subtotal + deliveryCharge;

  document.getElementById("subtotal").textContent = "₹" + subtotal;
  document.getElementById("grandTotal").textContent = "₹" + grandTotal;
}

displayCart();

const cartItemsContainer = document.getElementById("cartItemsContainer");

if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", function(e) {
    const itemId = Number(e.target.dataset.id);

    if (e.target.classList.contains("increase-btn")) {
      const item = cart.find(function(cartItem) {
        return cartItem.id === itemId;
      });
      item.quantity = item.quantity + 1;
      saveCart();
      updateCartCount();
      displayCart();
    }

    if (e.target.classList.contains("decrease-btn")) {
      const item = cart.find(function(cartItem) {
        return cartItem.id === itemId;
      });
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        cart = cart.filter(function(cartItem) {
          return cartItem.id !== itemId;
        });
      }
      saveCart();
      updateCartCount();
      displayCart();
    }

    if (e.target.classList.contains("remove-btn")) {
      cart = cart.filter(function(cartItem) {
        return cartItem.id !== itemId;
      });
      saveCart();
      updateCartCount();
      displayCart();
    }
  });
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      name: name,
      email: email,
      password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    window.location.href = "login.html";
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(function(user) {
      return user.email === email && user.password === password;
    });

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      alert("Login Successful");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password");
    }
  });
}

function updateAuthLink() {
  const authLink = document.getElementById("authLink");
  if (!authLink) return;

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    authLink.innerHTML = `<a href="#" id="logoutBtn">Logout (${loggedInUser.name})</a>`;
    document.getElementById("logoutBtn").addEventListener("click", function(e) {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      alert("Logged out successfully");
      window.location.href = "index.html";
    });
  } else {
    authLink.innerHTML = `<a href="login.html">Login</a>`;
  }
}

updateAuthLink();