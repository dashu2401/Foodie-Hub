/* ========== AUTH GUARD ========== */
const currentPage = location.pathname.split("/").pop() || "index.html";
const publicPages = ["login.html", "register.html"];
const isLoggedIn = !!localStorage.getItem("loggedInUser");

if (isLoggedIn && publicPages.includes(currentPage)) {
  window.location.href = "menu.html";
}

/* ========== FOOD DATA ========== */
const foodItems = [
  {
    id: 1,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.5,
    description: "Loaded with mozzarella and fresh herbs",
    image: "images/pizza.jpg",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 149,
    rating: 4.3,
    description: "Juicy patty with melted cheese",
    image: "images/burger.jpg",
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    price: 199,
    rating: 4.7,
    description: "Creamy pasta with bacon and parmesan",
    image: "images/carbonara.jpg",
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Salad",
    price: 129,
    rating: 4.2,
    description: "Crisp romaine lettuce with Caesar dressing",
    image: "images/caesar-salad.jpg",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 99,
    rating: 4.8,
    description: "Rich and fudgy chocolate brownie",
    image: "images/brownie.jpg",
  },
  {
    id: 6,
    name: "Grilled Chicken Sandwich",
    category: "Sandwich",
    price: 179,
    rating: 4.4,
    description: "Tender grilled chicken with fresh veggies",
    image: "images/grilled-chicken-sandwich.jpg",
  },
  {
    id: 7,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.6,
    description: "Classic pizza with fresh tomatoes and basil",
    image: "images/margherita-pizza.jpg",
  },
  {
    id: 8,
    name: "Veggie Wrap",
    category: "Wrap",
    price: 139,
    rating: 4.1,
    description: "Healthy wrap with assorted vegetables",
    image: "images/veggie-wrap.jpg",
  },
  {
    id: 9,
    name: "Tiramisu",
    category: "Dessert",
    price: 149,
    rating: 4.9,
    description: "Classic Italian dessert with coffee flavor",
    image: "images/tiramisu.jpg",
  },
  {
    id: 10,
    name: "Chicken Alfredo Pasta",
    category: "Pasta",
    price: 219,
    rating: 4.5,
    description: "Creamy Alfredo sauce with grilled chicken",
    image: "images/chicken-alfredo-pasta.jpg",
  },
  {
    id: 11,
    name: "Greek Salad",
    category: "Salad",
    price: 139,
    rating: 4.3,
    description: "Fresh salad with feta cheese and olives",
    image: "images/greek-salad.jpg",
  },
  {
    id: 12,
    name: "Vanilla Ice Cream",
    category: "Dessert",
    price: 89,
    rating: 4.7,
    description: "Classic vanilla ice cream scoop",
    image: "images/vanilla-ice-cream.jpg",
  },
  {
    id: 13,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 329,
    rating: 4.6,
    description: "Tender chicken with BBQ sauce",
    image: "images/bbq-chicken-pizza.jpg",
  },
  {
    id: 14,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 159,
    rating: 4.4,
    description: "Toasted bread topped with fresh avocado",
    image: "images/avocado-toast.jpg",
  },
  {
    id: 15,
    name: "Mango Smoothie",
    category: "Beverage",
    price: 119,
    rating: 4.5,
    description: "Refreshing smoothie made with ripe mangoes",
    image: "images/mango-smoothie.jpg",
  },
  {
    id: 16,
    name: "Chicken Caesar Wrap",
    category: "Wrap",
    price: 169,
    rating: 4.3,
    description: "Grilled chicken with Caesar dressing in a wrap",
    image: "images/chicken-caesar-wrap.jpg",
  },
  {
    id: 17,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    price: 199,
    rating: 4.8,
    description: "Creamy cheesecake topped with fresh strawberries",
    image: "images/strawberry-cheesecake.jpg",
  },
  {
    id: 18,
    name: "Veggie Burger",
    category: "Burger",
    price: 159,
    rating: 4.2,
    description: "Delicious burger with a veggie patty",
    image: "images/veggie-burger.jpg",
  },
  {
    id: 19,
    name: "Penne Arrabbiata",
    category: "Pasta",
    price: 189,
    rating: 4.5,
    description: "Spicy tomato sauce with penne pasta",
    image: "images/penne-arrabbiata.jpg",
  },
  {
    id: 20,
    name: "Caprese Salad",
    category: "Salad",
    price: 149,
    rating: 4.4,
    description: "Fresh mozzarella, tomatoes, and basil",
    image: "images/caprese-salad.jpg",
  },
  {
    id: 21,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    price: 169,
    rating: 4.6,
    description: "Rich chocolate cake with a molten center",
    image: "images/chocolate-lava-cake.jpg",
  },
  {
    id: 22,
    name: "Grilled Veggie Sandwich",
    category: "Sandwich",
    price: 159,
    rating: 4.3,
    description: "Fresh vegetables grilled and served in a sandwich",
    image: "images/grilled-veggie-sandwich.jpg",
  },
  {
    id: 23,
    name: "Margarita Mocktail",
    category: "Beverage",
    price: 129,
    rating: 4.4,
    description: "Tangy mocktail with margarita flavors",
    image: "images/margarita-mocktail.jpg",
  },
  {
    id: 24,
    name: "Buffalo Wings",
    category: "Appetizer",
    price: 179,
    rating: 4.5,
    description: "Crispy chicken wings tossed in spicy buffalo sauce",
    image: "images/buffalo-wings.jpg",
  },
  {
    id: 25,
    name: "Pancakes with Maple Syrup",
    category: "Breakfast",
    price: 149,
    rating: 4.7,
    description: "Fluffy pancakes drizzled with maple syrup",
    image: "images/pancakes-maple-syrup.jpg",
  },
  {
    id: 26,
    name: "Fruit Salad",
    category: "Dessert",
    price: 139,
    rating: 4.5,
    description: "A refreshing mix of seasonal fruits",
    image: "images/fruit-salad.jpg",
  },
  {
    id: 27,
    name: "Chicken Tikka Masala",
    category: "Main Course",
    price: 249,
    rating: 4.8,
    description: "Tender chicken in a creamy tomato sauce",
    image: "images/chicken-tikka-masala.jpg",
  },
  {
    id: 28,
    name: "Veggie Quesadilla",
    category: "Appetizer",
    price: 169,
    rating: 4.3,
    description: "Delicious quesadilla filled with fresh vegetables",
    image: "images/veggie-quesadilla.jpg",
  },
  {
    id: 29,
    name: "Lemonade",
    category: "Beverage",
    price: 99,
    rating: 4.6,
    description: "Refreshing lemonade with a hint of mint",
    image: "images/lemonade.jpg",
  },
  {
    id: 30,
    name: "Paneer Tika Frankie",
    category: "Wrap",
    price: 159,
    rating: 4.4,
    description: "Delicious frankie filled with paneer and spices",
    image: "images/paneer-tika-frankie.jpg",
  },
];

/* ========== FOOD DISPLAY ========== */
const container = document.getElementById("foodContainer");

function displayFood(items) {
  if (!container) return;

  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>No food found</p>";
    return;
  }

  items.forEach(function (item) {
    const card = document.createElement("div");

    card.className = "food-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>

      <span class="price">₹${item.price}</span>

      <span class="rating">
        ⭐ ${item.rating}
      </span>

      <button
        class="add-to-cart-btn"
        data-id="${item.id}">
        Add to Cart
      </button>

      <button
        class="add-to-wishlist-btn"
        data-id="${item.id}">
        Add to Wishlist
      </button>
    `;

    container.appendChild(card);
  });
}

if (container) {
  if (currentPage === "index.html") {
    const popular = foodItems
      .slice()
      .sort(function (a, b) {
        return b.rating - a.rating;
      })
      .slice(0, 6);

    displayFood(popular);
  } else {
    displayFood(foodItems);
  }
}

/* ========== SEARCH + CATEGORY ========== */

const searchInput = document.getElementById("searchInput");

let activeCategory = "All";

function applyFilters() {
  const text = searchInput ? searchInput.value.toLowerCase() : "";

  const filtered = foodItems.filter(function (item) {
    const matchName = item.name.toLowerCase().includes(text);

    const matchCat =
      activeCategory === "All" || item.category === activeCategory;

    return matchName && matchCat;
  });

  displayFood(filtered);
}

if (searchInput && container) {
  searchInput.addEventListener("input", applyFilters);
}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    activeCategory = button.dataset.category;

    categoryButtons.forEach(function (b) {
      b.classList.remove("active");
    });

    button.classList.add("active");

    if (container) {
      applyFilters();
    }
  });
});

/* ========== CART ========== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const el = document.getElementById("cartCount");

  if (el) {
    let total = 0;

    cart.forEach(function (item) {
      total += item.quantity;
    });

    el.textContent = total;
  }
}

updateCartCount();

/*
  ADD TO CART
  Login વગર Add to Cart કરશો
  તો login.html open થશે.
*/

if (container) {
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      /* Check Login */

      const loggedInUser = localStorage.getItem("loggedInUser");

      if (!loggedInUser) {
        alert("Please login first to add items to cart.");

        /*
            Login પછી પાછા menu.html પર
            જવા માટે nextPage save કરીએ છીએ.
          */

        localStorage.setItem("afterLoginPage", "menu.html");

        window.location.href = "login.html";

        return;
      }

      /* User logged in */

      const itemId = Number(e.target.dataset.id);

      const existing = cart.find(function (c) {
        return c.id === itemId;
      });

      if (existing) {
        existing.quantity += 1;
      } else {
        const food = foodItems.find(function (i) {
          return i.id === itemId;
        });

        if (!food) return;

        cart.push({
          id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          quantity: 1,
        });
      }

      saveCart();

      updateCartCount();

      alert("Added to cart!");
    }
  });
}

/* ========== DISPLAY CART ========== */

function displayCart() {
  const box = document.getElementById("cartItemsContainer");

  if (!box) return;

  box.innerHTML = "";

  if (cart.length === 0) {
    box.innerHTML = "<p>Your cart is empty</p>";
  }

  cart.forEach(function (item) {
    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
      >

      <h3>${item.name}</h3>

      <p>₹${item.price}</p>

      <div class="quantity-controls">

        <button
          class="decrease-btn"
          data-id="${item.id}">
          −
        </button>

        <span>
          ${item.quantity}
        </span>

        <button
          class="increase-btn"
          data-id="${item.id}">
          +
        </button>

      </div>

      <button
        class="remove-btn"
        data-id="${item.id}">
        Remove
      </button>

    `;

    box.appendChild(div);
  });

  let subtotal = 0;

  cart.forEach(function (item) {
    subtotal += item.price * item.quantity;
  });

  const delivery = subtotal > 0 ? 40 : 0;

  const sub = document.getElementById("subtotal");

  const del = document.getElementById("deliveryCharge");

  const grand = document.getElementById("grandTotal");

  if (sub) sub.textContent = "₹" + subtotal;

  if (del) del.textContent = "₹" + delivery;

  if (grand) grand.textContent = "₹" + (subtotal + delivery);
}

displayCart();

/* ========== CART BUTTONS ========== */

const cartItemsContainer = document.getElementById("cartItemsContainer");

if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", function (e) {
    const itemId = Number(e.target.dataset.id);

    if (!itemId) return;

    if (e.target.classList.contains("increase-btn")) {
      const item = cart.find(function (c) {
        return c.id === itemId;
      });

      if (item) {
        item.quantity += 1;
      }
    }

    if (e.target.classList.contains("decrease-btn")) {
      const item = cart.find(function (c) {
        return c.id === itemId;
      });

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart = cart.filter(function (c) {
          return c.id !== itemId;
        });
      }
    }

    if (e.target.classList.contains("remove-btn")) {
      cart = cart.filter(function (c) {
        return c.id !== itemId;
      });
    }

    saveCart();

    updateCartCount();

    displayCart();
  });
}

/* ========== REGISTER ========== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();

    const email = document
      .getElementById("regEmail")
      .value.trim()
      .toLowerCase();

    const password = document.getElementById("regPassword").value;

    if (password.length < 6) {
      alert("Password minimum 6 characters");

      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (
      users.some(function (u) {
        return u.email === email;
      })
    ) {
      alert("This email is already registered. Please login.");

      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    alert("Registration Successful!");

    /*
        Registration પછી
        saved page પર જવાનું.
      */

    const afterLogin = localStorage.getItem("afterLoginPage") || "menu.html";

    localStorage.removeItem("afterLoginPage");

    window.location.href = afterLogin;
  });
}

/* ========== LOGIN ========== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document
      .getElementById("loginEmail")
      .value.trim()
      .toLowerCase();

    const password = document.getElementById("loginPassword").value;

    if (password.length < 6) {
      alert("Password minimum 6 characters");

      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(function (u) {
      return u.email === email && u.password === password;
    });

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      alert("Login Successful");

      /*
          Login પછી જ્યાંથી login કર્યું હતું
          ત્યાં પાછા મોકલશે.
        */

      const afterLogin = localStorage.getItem("afterLoginPage") || "menu.html";

      localStorage.removeItem("afterLoginPage");

      window.location.href = afterLogin;
    } else {
      alert("Invalid email or password. Pehla register karo.");
    }
  });
}

/* ========== LOGIN / LOGOUT LINK ========== */

function updateAuthLink() {
  const authLink = document.getElementById("authLink");

  if (!authLink) return;

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    authLink.innerHTML = `
      <a href="#" id="logoutBtn">
        Logout (${user.name})
      </a>
    `;

    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      localStorage.removeItem("loggedInUser");

      alert("Logged out successfully");

      window.location.href = "login.html";
    });
  } else {
    authLink.innerHTML = `
      <a href="login.html">
        Login
      </a>
    `;
  }
}

updateAuthLink();

/* ========== WISHLIST ========== */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function updateWishlistCount() {
  const el = document.getElementById("wishlistCount");

  if (el) {
    el.textContent = wishlist.length;
  }
}

updateWishlistCount();

if (container) {
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-wishlist-btn")) {
      const itemId = Number(e.target.dataset.id);

      const idx = wishlist.findIndex(function (w) {
        return w.id === itemId;
      });

      if (idx !== -1) {
        wishlist.splice(idx, 1);

        alert("Removed from wishlist");
      } else {
        const food = foodItems.find(function (i) {
          return i.id === itemId;
        });

        if (!food) return;

        wishlist.push({
          id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
        });

        alert("Added to wishlist!");
      }

      saveWishlist();

      updateWishlistCount();
    }
  });
}

/* ========== DISPLAY WISHLIST ========== */

function displayWishlist() {
  const box = document.getElementById("wishlistItemsContainer");

  if (!box) return;

  box.innerHTML = "";

  if (wishlist.length === 0) {
    box.innerHTML = "<p>Your wishlist is empty</p>";

    return;
  }

  wishlist.forEach(function (item) {
    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
      >

      <h3>${item.name}</h3>

      <p>₹${item.price}</p>

      <button
        class="wish-add-cart-btn"
        data-id="${item.id}">
        Add to Cart
      </button>

      <button
        class="wish-remove-btn"
        data-id="${item.id}">
        Remove
      </button>

    `;

    box.appendChild(div);
  });
}

displayWishlist();

/* ========== WISHLIST BUTTONS ========== */

const wishlistContainerEl = document.getElementById("wishlistItemsContainer");

if (wishlistContainerEl) {
  wishlistContainerEl.addEventListener("click", function (e) {
    const itemId = Number(e.target.dataset.id);

    if (!itemId) return;

    if (e.target.classList.contains("wish-remove-btn")) {
      wishlist = wishlist.filter(function (w) {
        return w.id !== itemId;
      });

      saveWishlist();

      updateWishlistCount();

      displayWishlist();
    }

    if (e.target.classList.contains("wish-add-cart-btn")) {
      /*
          Wishlist માંથી Cart માં add કરવા માટે
          પણ Login જરૂરી છે.
        */

      const loggedInUser = localStorage.getItem("loggedInUser");

      if (!loggedInUser) {
        alert("Please login first to add items to cart.");

        localStorage.setItem("afterLoginPage", "wishlist.html");

        window.location.href = "login.html";

        return;
      }

      const existing = cart.find(function (c) {
        return c.id === itemId;
      });

      if (existing) {
        existing.quantity += 1;
      } else {
        const w = wishlist.find(function (x) {
          return x.id === itemId;
        });

        if (!w) return;

        cart.push({
          id: w.id,
          name: w.name,
          price: w.price,
          image: w.image,
          quantity: 1,
        });
      }

      saveCart();

      updateCartCount();

      alert("Added to cart!");
    }
  });
}

/* ========== COUPON + CHECKOUT ========== */

const coupons = {
  WELCOME50: 50,
  FOODIE10: 10,
  WEEKLY20: 20,
  FIRSTORDER: 30,
};

let appliedDiscountPercent = 0;

function getSubtotal() {
  let subtotal = 0;

  cart.forEach(function (item) {
    subtotal += item.price * item.quantity;
  });

  return subtotal;
}

function displayCheckoutSummary() {
  const subtotalEl = document.getElementById("checkoutSubtotal");

  if (!subtotalEl) return;

  const subtotal = getSubtotal();

  const discount = Math.round((subtotal * appliedDiscountPercent) / 100);

  const delivery = subtotal > 0 ? 40 : 0;

  const total = subtotal - discount + delivery;

  subtotalEl.textContent = "₹" + subtotal;

  const discountEl = document.getElementById("checkoutDiscount");

  const deliveryEl = document.getElementById("checkoutDelivery");

  const totalEl = document.getElementById("checkoutTotal");

  if (discountEl) discountEl.textContent = "-₹" + discount;

  if (deliveryEl) deliveryEl.textContent = "₹" + delivery;

  if (totalEl) totalEl.textContent = "₹" + total;
}

displayCheckoutSummary();

/* ========== APPLY COUPON ========== */

const applyCouponBtn = document.getElementById("applyCouponBtn");

if (applyCouponBtn) {
  applyCouponBtn.addEventListener("click", function () {
    const couponInput = document.getElementById("couponCode");

    const message = document.getElementById("couponMessage");

    if (!couponInput || !message) return;

    const code = couponInput.value.trim().toUpperCase();

    if (coupons[code]) {
      appliedDiscountPercent = coupons[code];

      message.textContent =
        "Coupon applied! " + appliedDiscountPercent + "% off";
    } else {
      appliedDiscountPercent = 0;

      message.textContent = "Invalid coupon code";
    }

    displayCheckoutSummary();
  });
}

/* ========== CHECKOUT BUTTON ========== */

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty");
    } else {
      window.location.href = "checkout.html";
    }
  });
}

/* ========== GENERATE ORDER ID ========== */

function generateOrderId() {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const day = String(now.getDate()).padStart(2, "0");

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const number = String(orders.length + 1).padStart(3, "0");

  return "FH" + year + month + day + number;
}

/* ========== CHECKOUT FORM ========== */

const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty");

      return;
    }

    const name = document.getElementById("custName").value.trim();

    const mobile = document.getElementById("custMobile").value.trim();

    const email = document.getElementById("custEmail").value.trim();

    const address = document.getElementById("custAddress").value.trim();

    const city = document.getElementById("custCity").value.trim();

    const pincode = document.getElementById("custPincode").value.trim();

    const payment = document.getElementById("paymentMethod").value;

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile number must be 10 digits");

      return;
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      alert("Pincode must be 6 digits");

      return;
    }

    const subtotal = getSubtotal();

    const discount = Math.round((subtotal * appliedDiscountPercent) / 100);

    const delivery = subtotal > 0 ? 40 : 0;

    const total = subtotal - discount + delivery;

    const orderId = generateOrderId();

    const order = {
      orderId: orderId,

      customer: {
        name: name,
        mobile: mobile,
        email: email,
        address: address,
        city: city,
        pincode: pincode,
      },

      payment: payment,

      items: cart,

      subtotal: subtotal,

      discount: discount,

      total: total,

      date: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    cart = [];

    saveCart();

    updateCartCount();

    checkoutForm.style.display = "none";

    const orderSuccess = document.getElementById("orderSuccess");

    if (orderSuccess) {
      orderSuccess.innerHTML = `

          <h3>
            Order Placed Successfully! 🎉
          </h3>

          <p>
            Order ID:
            <strong>${orderId}</strong>
          </p>

          <p>
            Total Paid:
            ₹${total}
            (${payment})
          </p>

          <p>
            <a href="menu.html">
              Order more food
            </a>
          </p>

        `;
    }

    displayCheckoutSummary();
  });
}

/* ========== CONTACT FORM ========== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({
      name: document.getElementById("contactName").value.trim(),

      email: document.getElementById("contactEmail").value.trim(),

      phone: document.getElementById("contactPhone").value.trim(),

      subject: document.getElementById("contactSubject").value.trim(),

      message: document.getElementById("contactMessage").value.trim(),

      date: new Date().toLocaleString(),
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Thank you! Your message has been sent.");

    contactForm.reset();
  });
}
