// Your original product array
const product = [
    {
        id: 0,
        Image: 'https://img.freepik.com/free-photo/strong-guy-with-muscular-body-workout-near-fence-morning-stadium-he-wears-sport-clothes-listening-music-with-headphones_197531-1139.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'NIKE',
        price: 120,
    },
    {
        id: 1,
        Image: 'https://img.freepik.com/free-photo/isolated-black-t-shirt-back-view_125540-1072.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Polo',
        price: 120,
    },
    {
        id: 2,
        Image: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Glidian',
        price: 120,
    },
    {
        id: 3,
        Image: 'https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828572.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Shirt',
        price: 120,
    },
    {
        id: 4,
        Image: 'https://img.freepik.com/free-photo/men-s-ankle-sneakers-white-street-style-apparel-shoot_53876-119733.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Puma',
        price: 120,
    },
    {
        id: 5,
        Image: 'https://img.freepik.com/free-photo/close-up-portrait-elegant-pretty-brunette-woman-stylish-vintage-hat-blue-navy-dress_291049-1124.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Polo',
        price: 120,
    },
    {
        id: 6,
        Image: 'https://img.freepik.com/free-photo/fashion-men-accessories-new-trendy-blue-jeans_1357-154.jpg?uid=R138266214&ga=GA1.1.1743847168.1720962939&semt=ais_hybrid', 
        title: 'Glidian',
        price: 120,
    },
    /*{
        id: 4,
        Image: 'images/img.jpg', 
        title: 'T Shirt',
        price: 120,
    },*/
];

// Initialize an empty cart
const cart = [];

// Function to add an item to the cart
function addtocart(a) {
    cart.push({ ...product[a] }); // Push the entire product object
    displaycart();
    alert("item added to cart");
}

// Function to remove an item from the cart
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
    alert("item removed from cart");
}

// Function to display the cart
function displaycart() {
    let total = 0;
    const cartItems = cart
        .map((item) => {
            total += item.price;
            return `
                <div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src="${item.Image}" alt="${item.title}">
                    </div>
                    <p style="font-size: 12px;">${item.title}</p>
                    <h2 style="font-size: 15px;">$${item.price}.00</h2>
                    <i onclick="delElement(${cart.indexOf(item)})">Remove</i>
                </div>
            `;
        })
        .join('');

    // Update cart count and total
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById('cartItem').innerHTML = cart.length === 0 ? 'Your cart is empty' : cartItems;
    document.getElementById("total").innerHTML = `$${total}.00`;
}

// Render products (assuming you have an element with id "root" in your HTML)
document.getElementById('root').innerHTML = `
    <div class="product-grid">
        ${product.map((item, index) => `
            <div class="card">
                <img src="${item.Image}" alt="${item.title}">
                <h5>${item.title}</h5>
                <p class="price">$${item.price}.00</p>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="button-container">
                    <button class="btn btn-view">View</button>
                    <button class="btn btn-add" onclick="addtocart(${index})">Add to cart</button>
                </div>
            </div>
        `).join('')}
    </div>
`;





// Function to toggle cart visibility
function toggleCart() {
    const cartSection = document.getElementById('cartSection');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';  // Show cart if hidden
    } else {
        cartSection.style.display = 'none';   // Hide cart if visible
    }
}

// Attach the toggle function to the "My Cart" button
document.getElementById('cartButton').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default link behavior
    toggleCart();  // Call the toggleCart function
});

