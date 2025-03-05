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
// Open Login Modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close Login Modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Open Sign Up Modal
function openSignUpModal() {
    document.getElementById('signUpModal').style.display = 'block';
    closeLoginModal(); // Close login modal if open
}

// Close Sign Up Modal
function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login logic here (e.g., API call)
    console.log('Login with:', email, password);
    alert('Login successful!');
    closeLoginModal();
});

// Handle Sign Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('signUpConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Add your sign-up logic here (e.g., API call)
    console.log('Sign Up with:', name, email, password);
    alert('Sign Up successful!');
    closeSignUpModal();
});

// Open Login Modal when clicking the Login button in the header
document.querySelector('.btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    openLoginModal();
});

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

// Handle Ultrasound Form Submission
document.getElementById('ultrasoundForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const prescriptionFile = document.getElementById('ultrasoundPrescription').files[0];
    if (prescriptionFile) {
        // Validate file type and size
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (!allowedTypes.includes(prescriptionFile.type)) {
            alert('Invalid file type. Please upload a PDF, JPG, or PNG file.');
            return;
        }
        if (prescriptionFile.size > maxSize) {
            alert('File size exceeds the limit of 5MB.');
            return;
        }
        console.log('Prescription uploaded:', prescriptionFile.name);
    }
    // Add your form submission logic here
    alert('Ultrasound appointment booked successfully!');
});

// Handle Sample Collection Form Submission
document.getElementById('scheduleForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const prescriptionFile = document.getElementById('samplePrescription').files[0];
    if (prescriptionFile) {
        // Validate file type and size
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (!allowedTypes.includes(prescriptionFile.type)) {
            alert('Invalid file type. Please upload a PDF, JPG, or PNG file.');
            return;
        }
        if (prescriptionFile.size > maxSize) {
            alert('File size exceeds the limit of 5MB.');
            return;
        }
        console.log('Prescription uploaded:', prescriptionFile.name);
    }
    // Add your form submission logic here
    alert('Sample collection scheduled successfully!');
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
async function fetchTests() {
    const response = await fetch('/api/tests');
    const tests = await response.json();
    console.log(tests);
}

// In-App Chat Functionality
function openChat() {
    document.getElementById('chatModal').style.display = 'block';
}

function closeChat() {
    document.getElementById('chatModal').style.display = 'none';
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    if (chatInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = `You: ${chatInput.value}`;
        chatMessages.appendChild(message);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Call Support Functionality
function callSupport() {
    window.location.href = 'tel:+919035071444'; // Replace with your support number
}

// Email Support Functionality
function emailSupport() {
    window.location.href = 'mailto:support@kanvadiagnostics.com'; // Replace with your support email
}

document.getElementById('ultrasoundForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = {
        patient_name: document.getElementById('patientName').value,
        patient_age: document.getElementById('patientAge').value,
        ultrasound_type: document.getElementById('ultrasoundType').value,
        appointment_date: document.getElementById('ultrasoundDate').value,
        appointment_time: document.getElementById('ultrasoundTime').value,
        notes: document.getElementById('notes').value
    };
    const response = await fetch('/api/ultrasound', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    const result = await response.json();
    alert(result.message);
});
// Admin Section Scripts
function manageUsers() {
    document.getElementById('manageUsersSection').style.display = 'block';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Fetch and display user data
}

function manageTests() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'block';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Fetch and display test data
}

function manageLabs() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'block';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Fetch and display lab data
}

function viewReports() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'block';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Fetch and display reports
}

function viewAnalytics() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'block';
    // Fetch and display analytics
}

function addUser() {
    // Logic to add a new user
}

function addTest() {
    // Logic to add a new test
}

function addLab() {
    // Logic to add a new lab
}