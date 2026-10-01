
const WHATSAPP_NUMBER = "923157540218";

// Product data
const products = [
    // Ladies Collection
    {
        id: 1,
        name: "Premium Lawn 3 Piece",
        category: "Ladies",
        fabric: "Lawn",
        price: 2850,
        image: "https://placehold.co/600x750/f5e6e8/7d2946?text=Lawn+3+Piece"
    },
    {
        id: 2,
        name: "Printed Cotton Suit",
        category: "Ladies",
        fabric: "Cotton",
        price: 2200,
        image: "https://placehold.co/600x750/f3e4d3/734b32?text=Cotton+Fabric"
    },
    {
        id: 3,
        name: "Elegant Linen Collection",
        category: "Ladies",
        fabric: "Linen",
        price: 3200,
        image: "https://placehold.co/600x750/e4e9dc/40553d?text=Linen+Fabric"
    },
    {
        id: 4,
        name: "Winter Khaddar 3 Piece",
        category: "Ladies",
        fabric: "Khaddar",
        price: 3500,
        image: "https://placehold.co/600x750/e9d9c7/70452f?text=Khaddar+3+Piece"
    },
    {
        id: 5,
        name: "Embroidered Chiffon",
        category: "Ladies",
        fabric: "Chiffon",
        price: 4200,
        image: "https://placehold.co/600x750/eadff0/68447d?text=Chiffon+Fabric"
    },
    {
        id: 6,
        name: "Luxury Silk Fabric",
        category: "Ladies",
        fabric: "Silk",
        price: 4500,
        image: "https://placehold.co/600x750/f4e5bd/805e20?text=Silk+Fabric"
    },
    {
        id: 7,
        name: "Printed Lawn 2 Piece",
        category: "Ladies",
        fabric: "Lawn",
        price: 1800,
        image: "https://placehold.co/600x750/dcebf2/315c75?text=Lawn+2+Piece"
    },
    {
        id: 8,
        name: "Premium Embroidered Suit",
        category: "Ladies",
        fabric: "Embroidered",
        price: 5000,
        image: "https://placehold.co/600x750/f0dfe3/82394d?text=Embroidered+Suit"
    },

    // Gents Collection
    {
        id: 9,
        name: "Premium Wash & Wear",
        category: "Gents",
        fabric: "Wash & Wear",
        price: 2500,
        image: "https://placehold.co/600x750/e1e5ed/34445c?text=Wash+and+Wear"
    },
    {
        id: 10,
        name: "Classic Cotton Fabric",
        category: "Gents",
        fabric: "Cotton",
        price: 2000,
        image: "https://placehold.co/600x750/ece6d8/655b42?text=Gents+Cotton"
    },
    {
        id: 11,
        name: "Premium Gents Khaddar",
        category: "Gents",
        fabric: "Khaddar",
        price: 2800,
        image: "https://placehold.co/600x750/d9e1da/425746?text=Gents+Khaddar"
    },
    {
        id: 12,
        name: "Luxury Linen Fabric",
        category: "Gents",
        fabric: "Linen",
        price: 3500,
        image: "https://placehold.co/600x750/e8dfd2/6b5541?text=Gents+Linen"
    },
    {
        id: 13,
        name: "Classic Boski Fabric",
        category: "Gents",
        fabric: "Boski",
        price: 4000,
        image: "https://placehold.co/600x750/f2e4bf/80682e?text=Boski+Fabric"
    },
    {
        id: 14,
        name: "Premium Plain Fabric",
        category: "Gents",
        fabric: "Plain",
        price: 2300,
        image: "https://placehold.co/600x750/e4e4e4/444444?text=Plain+Fabric"
    },
    {
        id: 15,
        name: "Elegant Embroidered Fabric",
        category: "Gents",
        fabric: "Embroidered",
        price: 3800,
        image: "https://placehold.co/600x750/e2d8cd/5d4a3a?text=Embroidered+Fabric"
    },
    {
        id: 16,
        name: "Premium Winter Fabric",
        category: "Gents",
        fabric: "Winter Collection",
        price: 3000,
        image: "https://placehold.co/600x750/d7dce7/394b68?text=Winter+Fabric"
    }
];

// Shopping cart
let cart = [];

// Display products
function displayProducts() {
    const ladiesContainer = document.getElementById("ladies-products");
    const gentsContainer = document.getElementById("gents-products");

    if (!ladiesContainer || !gentsContainer) {
        console.error("Product containers not found. Check index.html IDs.");
        return;
    }

    ladiesContainer.innerHTML = "";
    gentsContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/600x750/f3e8ee/684054?text=Fabric+Image';"
            >

            <div class="product-info">
                <span class="product-category">${product.fabric}</span>
                <h3>${product.name}</h3>
                <p class="product-price">Rs. ${product.price.toLocaleString("en-PK")}</p>

                <button class="btn"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

                <button class="btn btn-light"
                    onclick="buyNow(${product.id})">
                    Buy Now
                </button>

                <button class="whatsapp-order"
                    onclick="orderProduct(${product.id})">
                    Order on WhatsApp
                </button>
            </div>
        `;

        if (product.category === "Ladies") {
            ladiesContainer.appendChild(card);
        } else {
            gentsContainer.appendChild(card);
        }
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    alert(product.name + " added to your cart!");
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>Price: Rs. ${item.price.toLocaleString("en-PK")}</p>

            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <span> ${item.quantity} </span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>

            <button onclick="removeFromCart(${item.id})">
                Remove
            </button>

            <p>Subtotal: Rs. ${(item.price * item.quantity).toLocaleString("en-PK")}</p>
            <hr>
        `;

        cartItems.appendChild(row);
    });

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString("en-PK");
}

// Change quantity
function changeQuantity(productId, amount) {
    const item = cart.find(product => product.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== productId);
    }

    updateCart();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Buy a single product
function buyNow(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const message =
        `Assalam o Alaikum! I want to buy from Uswa's Collection.\n\n` +
        `Product: ${product.name}\n` +
        `Category: ${product.category}\n` +
        `Fabric: ${product.fabric}\n` +
        `Price: Rs. ${product.price}\n` +
        `Please confirm availability and delivery details.`;

    openWhatsApp(message);
}

// Order one product on WhatsApp
function orderProduct(productId) {
    buyNow(productId);
}

// Checkout complete cart on WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add a product first.");
        return;
    }

    let message = "Assalam o Alaikum! I want to order from Uswa's Collection.\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        message +=
            `Product: ${item.name}\n` +
            `Quantity: ${item.quantity}\n` +
            `Subtotal: Rs. ${subtotal}\n\n`;
    });

    message +=
        `Total: Rs. ${total}\n\n` +
        "Please confirm my order and delivery details.";

    openWhatsApp(message);
}

// Open WhatsApp
function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Start website
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCart();
});
          
