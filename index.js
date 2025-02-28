// Cart System
let cart = [];
let cartTotal = 0;

function addToCart(testName, price) {
    cart.push({ testName, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotalElement = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.testName} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = cart.length;
    cartTotalElement.textContent = cartTotal;
}

function removeFromCart(index) {
    cartTotal -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Proceeding to checkout. Total: $${cartTotal}`);
        cart = [];
        cartTotal = 0;
        updateCart();
    }
}

// Sample Scheduling Form Submission
document.getElementById('scheduleForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const address = document.getElementById('address').value;

    console.log('Sample Collection Scheduled:', { name, phone, date, time, address });
    alert('Sample collection scheduled successfully!');
});

// Payment Integration
function payWithCard() {
    alert('Redirecting to card payment gateway...');
}

function payWithUPI() {
    alert('Redirecting to UPI payment gateway...');
}

function payWithWallet() {
    alert('Redirecting to wallet payment gateway...');
}

// Sample Collection Tracking
let statusIndex = 0;
const statusMessages = ["Assigned", "En Route", "Collected"];

function updateStatus() {
    statusIndex = (statusIndex + 1) % statusMessages.length;
    document.getElementById('trackingMessage').textContent = `Status: ${statusMessages[statusIndex]}`;
}

// Location Check
const availableLocations = ["560034", "560072 ", "Location C"]; // Example locations


function checkLocation() {
    const locationInput = document.getElementById('location').value;
    const locationMessage = document.getElementById('locationMessage');

    if (availableLocations.includes(locationInput)) {
        locationMessage.textContent = `Sample collection available in ${locationInput}.`;
    } else {
        locationMessage.textContent = 'Sorry, sample collection is not available in your area.';
    }
}
// Search Functionality
function filterTests() {
    const searchTerm = document.getElementById('searchTest').value.toLowerCase();
    const testCards = document.querySelectorAll('.test-card');

    testCards.forEach(card => {
        const testName = card.querySelector('h3').textContent.toLowerCase();
        if (testName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
// Ultrasound Appointment Booking Form Submission
document.getElementById('ultrasoundForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('patientAge').value;
    const ultrasoundType = document.getElementById('ultrasoundType').value;
    const ultrasoundDate = document.getElementById('ultrasoundDate').value;
    const ultrasoundTime = document.getElementById('ultrasoundTime').value;
    const notes = document.getElementById('notes').value;

    // Log the form data (you can replace this with an API call to save the data)
    console.log('Ultrasound Appointment Booked:', {
        patientName,
        patientAge,
        ultrasoundType,
        ultrasoundDate,
        ultrasoundTime,
        notes
    });

    // Show a success message
    alert('Ultrasound appointment booked successfully!');

    // Reset the form
    document.getElementById('ultrasoundForm').reset();
});

// Payment Forms
function showCardForm() {
    document.getElementById('cardForm').style.display = 'block';
    document.getElementById('upiForm').style.display = 'none';
}

function showUPIForm() {
    document.getElementById('upiForm').style.display = 'block';
    document.getElementById('cardForm').style.display = 'none';
}

document.getElementById('cardDetailsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    console.log('Card Payment Details:', { cardNumber, expiryDate, cvv });
    alert('Card payment processed successfully!');
});

document.getElementById('upiDetailsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const upiId = document.getElementById('upiId').value;
    console.log('UPI Payment Details:', { upiId });
    alert('UPI payment processed successfully!');
});

// Report Access
function downloadReport(reportName) {
    alert(`Downloading ${reportName}...`);
}

function shareReport(reportName) {
    alert(`Sharing ${reportName}...`);
}

// Customer Support
function openChat() {
    alert('Opening in-app chat...');
}

function callSupport() {
    alert('Calling support...');
}

function emailSupport() {
    alert('Opening email support...');
}