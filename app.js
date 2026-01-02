/* =============================================
   SAGAR DIGITAL MENU - JAVASCRIPT
   ============================================= */

// =============================================
// MENU DATA (Parsed from menu.md)
// =============================================
// NOTE: Replace placeholder images with your actual dish photos
// Place images in: ./assets/images/[dish-name].webp

const menuItems = [
    // Starters – Tandoor
    {
        id: 1,
        name: "Dahi Kebab",
        category: "Starters – Tandoor",
        price: 230,
        isVeg: true,
        isChefFav: true,
        description: "Creamy hung curd patties with aromatic spices, shallow fried to golden perfection.",
        longDescription: "A popular vegetarian North Indian appetizer made from a spiced hung yogurt (curd) mixture, which is then shaped into patties or balls, coated in breadcrumbs, and fried until golden and crispy.",
        image: "./assets/images/dahi-kebab.png"
    },
    {
        id: 2,
        name: "Hara Bhara Kebab",
        category: "Starters – Tandoor",
        price: 230,
        isVeg: true,
        isChefFav: false,
        description: "Nutritious spinach and green pea patties with mild spices.",
        image: "./assets/images/hara-bhara-kebab.png"
    },
    {
        id: 3,
        name: "Veg Seekh Kebab",
        category: "Starters – Tandoor",
        price: 230,
        isVeg: true,
        isChefFav: false,
        description: "Minced vegetables shaped on skewers and grilled in tandoor.",
        image: "./assets/images/veg-seekh-kebab.png"
    },

    // Vegetables / Main Course
    {
        id: 4,
        name: "Jeera Aloo",
        category: "Main Course",
        price: 180,
        isVeg: true,
        isChefFav: false,
        description: "Baby potatoes tempered with cumin seeds and fresh coriander.",
        image: "./assets/images/jeera-aloo.png"
    },
    {
        id: 5,
        name: "Aloo Pyaaz",
        category: "Main Course",
        price: 180,
        isVeg: true,
        isChefFav: false,
        description: "Classic potato and onion stir-fry with traditional spices.",
        image: "./assets/images/aloo-pyaaz.png"
    },
    {
        id: 6,
        name: "Chana Masala",
        category: "Main Course",
        price: 200,
        isVeg: true,
        isChefFav: true,
        description: "Chickpeas cooked in rich tomato-based masala gravy.",
        image: "./assets/images/chana-masala.png"
    },
    {
        id: 7,
        name: "Sev Tomato",
        category: "Main Course",
        price: 220,
        isVeg: true,
        isChefFav: false,
        description: "Tangy tomato curry topped with crispy sev.",
        image: "./assets/images/sev-tomato.png"
    },

    // Pulses (Dal)
    {
        id: 8,
        name: "Dal Fry",
        category: "Pulses",
        price: 220,
        isVeg: true,
        isChefFav: false,
        description: "Yellow lentils tempered with cumin, garlic and ghee.",
        image: "./assets/images/dal-fry.png"
    },
    {
        id: 9,
        name: "Dal Tadka",
        category: "Pulses",
        price: 220,
        isVeg: true,
        isChefFav: true,
        description: "Mixed lentils with aromatic tempering of spices and herbs.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Dal+Tadka"
    },

    // Pasta
    {
        id: 10,
        name: "Peri Peri Pasta",
        category: "Pasta",
        price: 260,
        isVeg: true,
        isChefFav: false,
        isSpicy: true,
        description: "Penne pasta tossed in spicy peri peri sauce with vegetables.",
        image: "./assets/images/peri-peri-pasta.png"
    },
    {
        id: 11,
        name: "Red Sauce Pasta",
        category: "Pasta",
        price: 270,
        isVeg: true,
        isChefFav: false,
        description: "Classic Italian pasta in rich tomato basil sauce.",
        image: "./assets/images/red-sauce-pasta.png"
    },

    // Momos
    {
        id: 12,
        name: "Steam Momos",
        category: "Momos",
        price: 180,
        isVeg: true,
        isChefFav: false,
        description: "Soft steamed dumplings filled with seasoned vegetables.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Steam+Momos"
    },
    {
        id: 13,
        name: "Fried Momos",
        category: "Momos",
        price: 200,
        isVeg: true,
        isChefFav: true,
        description: "Crispy golden fried dumplings with spicy dipping sauce.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Fried+Momos"
    },
    {
        id: 14,
        name: "Tandoori Momos",
        category: "Momos",
        price: 210,
        isVeg: true,
        isChefFav: false,
        description: "Momos marinated in tandoori spices and grilled to perfection.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Tandoori+Momos"
    },

    // Pizza
    {
        id: 15,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 250,
        isVeg: true,
        isChefFav: false,
        description: "Classic pizza with fresh tomato sauce and mozzarella cheese.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Margherita"
    },
    {
        id: 16,
        name: "Corn & Cheese Pizza",
        category: "Pizza",
        price: 270,
        isVeg: true,
        isChefFav: true,
        description: "Loaded with sweet corn and generous cheese topping.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Corn+Cheese"
    },
    {
        id: 17,
        name: "OTC Pizza",
        category: "Pizza",
        price: 270,
        isVeg: true,
        isChefFav: false,
        description: "Onion, tomato and capsicum on a cheesy base.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=OTC+Pizza"
    },

    // Sandwiches
    {
        id: 18,
        name: "Veg Grilled Sandwich",
        category: "Sandwiches",
        price: 140,
        isVeg: true,
        isChefFav: false,
        description: "Toasted sandwich with fresh vegetables and cheese.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Grilled+Sandwich"
    },
    {
        id: 19,
        name: "Corn & Cheese Sandwich",
        category: "Sandwiches",
        price: 150,
        isVeg: true,
        isChefFav: false,
        description: "Creamy corn and cheese filling in crispy grilled bread.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Corn+Sandwich"
    },

    // Mini Meals / Burgers
    {
        id: 20,
        name: "Aloo Tikki Burger",
        category: "Burgers",
        price: 100,
        isVeg: true,
        isChefFav: false,
        description: "Crispy potato patty burger with fresh veggies and sauces.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Aloo+Tikki"
    },
    {
        id: 21,
        name: "Veg Burger",
        category: "Burgers",
        price: 120,
        isVeg: true,
        isChefFav: false,
        description: "Classic vegetable patty with lettuce, tomato and mayo.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Veg+Burger"
    },
    {
        id: 22,
        name: "Paneer Tikka Burger",
        category: "Burgers",
        price: 140,
        isVeg: true,
        isChefFav: true,
        description: "Spiced paneer tikka patty with mint mayo and onion rings.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Paneer+Burger"
    },

    // Drinks / Coffee
    {
        id: 23,
        name: "Espresso",
        category: "Drinks",
        price: 100,
        isVeg: true,
        isChefFav: false,
        description: "Strong and bold Italian coffee shot. No milk.",
        image: "./assets/images/espresso.jpg"
    },
    {
        id: 24,
        name: "Americano",
        category: "Drinks",
        price: 100,
        isVeg: true,
        isChefFav: false,
        description: "Espresso diluted with hot water for smooth taste.",
        image: "./assets/images/americano.png"
    },
    {
        id: 25,
        name: "Macchiato",
        category: "Drinks",
        price: 100,
        isVeg: true,
        isChefFav: false,
        description: "Espresso marked with a dollop of foamed milk.",
        image: "./assets/images/macchiato.png"
    },
    {
        id: 26,
        name: "Signature Affogato",
        category: "Drinks",
        price: 120,
        isVeg: true,
        isChefFav: true,
        description: "Rich espresso poured over creamy vanilla ice cream.",
        image: "./assets/images/signature-affogato.png"
    },
    {
        id: 27,
        name: "Irish Coffee",
        category: "Drinks",
        price: 120,
        isVeg: true,
        isChefFav: false,
        description: "Coffee with Irish whiskey flavor and whipped cream.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Irish+Coffee"
    },

    // Shakes
    {
        id: 28,
        name: "Black Current Shake",
        category: "Shakes",
        price: 150,
        isVeg: true,
        isChefFav: false,
        description: "Refreshing shake with rich black currant flavor.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Black+Current"
    },
    {
        id: 29,
        name: "Strawberry Shake",
        category: "Shakes",
        price: 150,
        isVeg: true,
        isChefFav: true,
        description: "Creamy milkshake with fresh strawberry goodness.",
        image: "https://placehold.co/400/2E8B57/FFFFFF?text=Strawberry"
    }
];

// =============================================
// OFFERS DATA (Banner Images)
// =============================================
// NOTE: Add your banner images to assets/images/
const offers = [
    {
        id: 1,
        image: "./assets/images/banner-1.png",
        alt: "New Year 2026 Offer - Buy 1 Get 1 Free on Gourmet Burgers"
    },
    {
        id: 2,
        image: "./assets/images/banner-2.png",
        alt: "New Year 2026 Combo Offer - Buy Any Combo & Get 20% Off"
    }
];

// =============================================
// DOM ELEMENTS
// =============================================
const splashScreen = document.getElementById('splash-screen');
const viewMenuBtn = document.getElementById('view-menu-btn');
const searchInput = document.getElementById('search-input');
const vegToggle = document.getElementById('veg-toggle');
const nonvegToggle = document.getElementById('nonveg-toggle');
const categoriesContainer = document.getElementById('categories-container');
const dishesContainer = document.getElementById('dishes-container');
const emptyState = document.getElementById('empty-state');
const offersContainer = document.getElementById('offers-container');

// Cart Elements
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartPanel = document.getElementById('cart-panel');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmptyState = document.getElementById('cart-empty');
const cartCount = document.getElementById('cart-count');
const cartTotalAmount = document.getElementById('cart-total-amount');
const clearCartBtn = document.getElementById('clear-cart-btn');

// =============================================
// STATE
// =============================================
let currentFilter = 'all'; // 'all', 'veg', 'nonveg'
let currentCategory = 'all';
let searchQuery = '';
let cart = []; // { id, name, price, image, quantity }

// Get table number from URL parameter (for QR code scanning)
const urlParams = new URLSearchParams(window.location.search);
const currentTableNumber = urlParams.get('table');

// =============================================
// WEBHOOK CONFIGURATION (n8n + Telegram)
// =============================================
// Replace with your n8n webhook URL
const WEBHOOK_URL = 'http://10.255.100.124:55000/webhook/sagar-order'; // n8n webhook (local network)

// Function to send order to webhook
async function sendOrderToWebhook(orderData) {
    if (!WEBHOOK_URL) {
        console.log('Webhook URL not configured - skipping notification');
        return;
    }

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) {
            console.error('Webhook failed:', response.status);
        } else {
            console.log('Order sent to kitchen successfully!');
        }
    } catch (error) {
        console.error('Error sending to webhook:', error);
        // Don't show error to customer - order is still valid
    }
}

// Extract unique categories from menu items
const categories = ['All', ...new Set(menuItems.map(item => item.category))];

// =============================================
// SPLASH SCREEN TRANSITION
// =============================================
viewMenuBtn.addEventListener('click', () => {
    splashScreen.classList.add('hidden');
    // Focus search after transition
    setTimeout(() => {
        searchInput.focus();
    }, 500);
});

// =============================================
// RENDER OFFERS BANNER
// =============================================
function renderOffers() {
    offersContainer.innerHTML = offers.map(offer => `
        <div class="offer-banner">
            <img src="${offer.image}" alt="${offer.alt}" class="offer-image" loading="lazy">
        </div>
    `).join('');
}

// =============================================
// RENDER CATEGORIES
// =============================================
function renderCategories() {
    categoriesContainer.innerHTML = categories.map((category, index) => `
        <button class="category-pill ${index === 0 ? 'active' : ''}" 
                data-category="${category === 'All' ? 'all' : category}">
            ${category}
        </button>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.category;
            renderDishes();
        });
    });
}

// =============================================
// RENDER DISHES
// =============================================
function renderDishes() {
    let filtered = menuItems;

    // Filter by Veg/Non-Veg
    if (currentFilter === 'veg') {
        filtered = filtered.filter(item => item.isVeg);
    } else if (currentFilter === 'nonveg') {
        filtered = filtered.filter(item => !item.isVeg);
    }

    // Filter by Category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }

    // Show/Hide Empty State
    if (filtered.length === 0) {
        dishesContainer.innerHTML = '';
        emptyState.classList.add('show');
    } else {
        emptyState.classList.remove('show');
        dishesContainer.innerHTML = filtered.map(dish => createDishCard(dish)).join('');

        // Add click handlers for Add buttons
        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card flip
                const dishId = parseInt(btn.dataset.id);
                addToCart(dishId);
            });
        });

        // Add click handlers for card flip (all cards are flippable)
        document.querySelectorAll('.dish-card.flippable').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't flip if clicking on buttons
                if (e.target.closest('.btn-add') || e.target.closest('.back-close-btn')) return;
                card.classList.toggle('flipped');
            });
        });

        // Add click handlers for back close button
        document.querySelectorAll('.back-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = btn.closest('.dish-card');
                card.classList.remove('flipped');
            });
        });
    }
}

// =============================================
// CREATE DISH CARD HTML
// =============================================
function createDishCard(dish) {
    const vegIcon = dish.isVeg ? '🟢' : '🔴';
    const vegLabel = dish.isVeg ? 'Veg' : 'Non-Veg';
    const vegClass = dish.isVeg ? 'veg' : 'nonveg';
    const inCart = cart.find(item => item.id === dish.id);
    const btnText = inCart ? `Added (${inCart.quantity})` : 'Add';
    const btnClass = inCart ? 'btn-add added' : 'btn-add';
    const backDescription = dish.longDescription || dish.description;

    return `
        <article class="dish-card flippable" data-dish-id="${dish.id}">
            <div class="card-inner">
                <!-- Front Face -->
                <div class="card-front">
                    <div class="dish-image-container">
                        <img src="${dish.image}" 
                             alt="${dish.name}" 
                             class="dish-image"
                             loading="lazy">
                        ${dish.isChefFav ? '<span class="chef-fav-badge" title="Chef\'s Favourite">⭐</span>' : ''}
                    </div>
                    <h3 class="dish-name">${dish.name}</h3>
                    <div class="dish-tags">
                        <span class="tag ${vegClass}">${vegIcon} ${vegLabel}</span>
                        ${dish.isSpicy ? '<span class="tag spicy">🌶️ Spicy</span>' : ''}
                    </div>
                    <div class="dish-footer">
                        <span class="dish-price">₹${dish.price}</span>
                        <button class="${btnClass}" data-id="${dish.id}">${btnText}</button>
                    </div>
                </div>
                <!-- Back Face -->
                <div class="card-back">
                    <button class="back-close-btn">✕</button>
                    <h3 class="back-title">${dish.name}</h3>
                    <p class="back-description">${dish.longDescription || dish.description}</p>
                    <div class="back-footer">
                        <span class="tag ${vegClass}">${vegIcon} ${vegLabel}</span>
                        <span class="dish-price">₹${dish.price}</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// =============================================
// CART FUNCTIONALITY
// =============================================

// Add item to cart
function addToCart(dishId) {
    const dish = menuItems.find(item => item.id === dishId);
    if (!dish) return;

    const existingItem = cart.find(item => item.id === dishId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1
        });
    }

    updateCartUI();
    renderDishes(); // Update button states
}

// Remove item from cart
function removeFromCart(dishId) {
    cart = cart.filter(item => item.id !== dishId);
    updateCartUI();
    renderDishes();
}

// Update quantity
function updateQuantity(dishId, change) {
    const item = cart.find(item => item.id === dishId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(dishId);
    } else {
        updateCartUI();
        renderDishes();
    }
}

// Clear entire cart
function clearCart() {
    cart = [];
    updateCartUI();
    renderDishes();
}

// Calculate total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Count total items
function countItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Update cart UI
function updateCartUI() {
    const total = calculateTotal();
    const itemCount = countItems();

    // Update cart count badge
    cartCount.textContent = itemCount;
    if (itemCount === 0) {
        cartCount.classList.add('hidden');
    } else {
        cartCount.classList.remove('hidden');
    }

    // Update total amount
    cartTotalAmount.textContent = `₹${total}`;

    // Render cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartEmptyState.classList.remove('hidden');
    } else {
        cartEmptyState.classList.add('hidden');
        cartItemsContainer.innerHTML = cart.map(item => createCartItem(item)).join('');

        // Add event listeners to quantity buttons
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const action = btn.dataset.action;

                if (action === 'increase') {
                    updateQuantity(id, 1);
                } else if (action === 'decrease') {
                    updateQuantity(id, -1);
                } else if (action === 'delete') {
                    removeFromCart(id);
                }
            });
        });
    }
}

// Create cart item HTML
function createCartItem(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                <button class="qty-btn delete" data-id="${item.id}" data-action="delete">×</button>
            </div>
        </div>
    `;
}

// =============================================
// CART PANEL TOGGLE
// =============================================
function openCart() {
    cartPanel.classList.add('show');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartPanel.classList.remove('show');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

cartToggleBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
clearCartBtn.addEventListener('click', () => {
    clearCart();
    closeCart();
});

// Place Order Button
const placeOrderBtn = document.getElementById('place-order-btn');

// Order Modal Elements
const orderModal = document.getElementById('order-modal');
const orderModalOverlay = document.getElementById('order-modal-overlay');
const orderModalIcon = document.getElementById('order-modal-icon');
const orderModalTitle = document.getElementById('order-modal-title');
const orderModalBody = document.getElementById('order-modal-body');
const orderModalActions = document.getElementById('order-modal-actions');
const orderModalCancel = document.getElementById('order-modal-cancel');
const orderModalConfirm = document.getElementById('order-modal-confirm');

// Show Order Modal
function showOrderModal(type, content) {
    if (type === 'confirm') {
        orderModalIcon.textContent = '🛒';
        orderModalTitle.textContent = 'Order Summary';
        orderModalBody.innerHTML = content;
        orderModalCancel.style.display = 'block';
        orderModalConfirm.textContent = 'Confirm Order';
        orderModalConfirm.classList.remove('btn-close-only');
        orderModalActions.classList.remove('single-btn');
    } else if (type === 'success') {
        orderModalIcon.textContent = '🎉';
        orderModalTitle.textContent = 'Order Placed!';
        orderModalBody.innerHTML = content;
        orderModalCancel.style.display = 'none';
        orderModalConfirm.textContent = 'Done';
        orderModalConfirm.classList.add('btn-close-only');
        orderModalActions.classList.add('single-btn');
    } else if (type === 'error') {
        orderModalIcon.textContent = '⚠️';
        orderModalTitle.textContent = 'Oops!';
        orderModalBody.innerHTML = content;
        orderModalCancel.style.display = 'none';
        orderModalConfirm.textContent = 'OK';
        orderModalConfirm.classList.add('btn-close-only');
        orderModalActions.classList.add('single-btn');
    }

    orderModal.classList.add('show');
    orderModalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Hide Order Modal
function hideOrderModal() {
    orderModal.classList.remove('show');
    orderModalOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Order Modal Event Listeners
orderModalOverlay.addEventListener('click', hideOrderModal);
orderModalCancel.addEventListener('click', hideOrderModal);

// Track modal state
let isConfirmingOrder = false;

placeOrderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showOrderModal('error', '<p class="success-message">Your cart is empty!<br>Please add some items first.</p>');
        return;
    }

    // Build order summary HTML
    const tableInfoHtml = currentTableNumber
        ? `<div class="table-info">📍 Table ${currentTableNumber}</div>`
        : '';

    const orderItemsHtml = cart.map(item => `
        <div class="order-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');

    const total = calculateTotal();

    const modalContent = `
        ${tableInfoHtml}
        <div class="order-items">${orderItemsHtml}</div>
        <div class="order-total">
            <span>Total</span>
            <span>₹${total}</span>
        </div>
    `;

    isConfirmingOrder = true;
    showOrderModal('confirm', modalContent);
});

// Handle confirm button click
orderModalConfirm.addEventListener('click', () => {
    if (isConfirmingOrder) {
        // User confirmed the order
        isConfirmingOrder = false;
        hideOrderModal();

        // Prepare order data for webhook (n8n -> Telegram)
        const orderData = {
            tableNumber: currentTableNumber || 'Walk-in',
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.price * item.quantity
            })),
            total: calculateTotal(),
            timestamp: new Date().toISOString()
        };

        // Send to webhook (async - don't wait)
        sendOrderToWebhook(orderData);

        // Show success message after a brief delay
        setTimeout(() => {
            const tableText = currentTableNumber ? ` for Table ${currentTableNumber}` : '';
            showOrderModal('success', `
                <p class="success-message">
                    Thank you for your order${tableText}!<br><br>
                    Your food will be prepared shortly.<br>
                    Please wait at your table.
                </p>
            `);
            clearCart();
            closeCart();
        }, 200);
    } else {
        // Just closing an info/success modal
        hideOrderModal();
    }
});

// =============================================
// FILTER TOGGLES
// =============================================
vegToggle.addEventListener('click', () => {
    if (currentFilter === 'veg') {
        // Already veg, deselect
        vegToggle.classList.remove('active');
        nonvegToggle.classList.remove('active');
        currentFilter = 'all';
    } else {
        vegToggle.classList.add('active');
        nonvegToggle.classList.remove('active');
        currentFilter = 'veg';
    }
    renderDishes();
});

nonvegToggle.addEventListener('click', () => {
    if (currentFilter === 'nonveg') {
        // Already nonveg, deselect
        vegToggle.classList.remove('active');
        nonvegToggle.classList.remove('active');
        currentFilter = 'all';
    } else {
        nonvegToggle.classList.add('active');
        vegToggle.classList.remove('active');
        currentFilter = 'nonveg';
    }
    renderDishes();
});

// =============================================
// SEARCH FUNCTIONALITY
// =============================================
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderDishes();
});

// Debounce search for better performance
let searchTimeout;
searchInput.addEventListener('keyup', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        renderDishes();
    }, 150);
});

// =============================================
// INITIALIZE APP
// =============================================
function init() {
    renderOffers();
    renderCategories();
    renderDishes();
    updateCartUI();
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);

