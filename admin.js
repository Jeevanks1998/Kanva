// JavaScript for handling login and displaying the admin dashboard
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded admin credentials (for demonstration purposes)
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
        // Hide login section and show admin dashboard
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Admin Section Scripts
function manageUsers() {
    document.getElementById('manageUsersSection').style.display = 'block';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Clear any existing add user form
    document.getElementById('addUserFormContainer').innerHTML = '';
}

function manageTests() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'block';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Clear any existing add test form
    document.getElementById('addTestFormContainer').innerHTML = '';
}

function manageLabs() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'block';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
    // Clear any existing add lab form
    document.getElementById('addLabFormContainer').innerHTML = '';
}

function viewReports() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'block';
    document.getElementById('viewAnalyticsSection').style.display = 'none';
}

function viewAnalytics() {
    document.getElementById('manageUsersSection').style.display = 'none';
    document.getElementById('manageTestsSection').style.display = 'none';
    document.getElementById('manageLabsSection').style.display = 'none';
    document.getElementById('viewReportsSection').style.display = 'none';
    document.getElementById('viewAnalyticsSection').style.display = 'block';
}

function addUser() {
    const container = document.getElementById('addUserFormContainer');
    container.innerHTML = `
        <h3>Add New User</h3>
        <form id="addUserForm">
            <div class="form-group">
                <label for="userName">Name:</label>
                <input type="text" id="userName" name="userName" required>
            </div>
            <div class="form-group">
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required>
            </div>
            <div class="form-group">
                <label for="userRole">Role:</label>
                <select id="userRole" name="userRole" required>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button type="submit">Add User</button>
        </form>
    `;

    // Handle form submission
    document.getElementById('addUserForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;
        const userRole = document.getElementById('userRole').value;

        // Add logic to save the user (e.g., send to server or update local state)
        const userList = document.getElementById('userList');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${userList.children.length + 1}</td>
            <td>${userName}</td>
            <td>${userEmail}</td>
            <td>${userRole}</td>
            <td>
                <button onclick="editUser(this)">Edit</button>
                <button onclick="deleteUser(this)">Delete</button>
            </td>
        `;
        userList.appendChild(newRow);

        alert(`User Added: ${userName}, ${userEmail}, ${userRole}`);
        container.innerHTML = ''; // Clear the form after submission
    });
}

function addTest() {
    const container = document.getElementById('addTestFormContainer');
    container.innerHTML = `
        <h3>Add New Test</h3>
        <form id="addTestForm">
            <div class="form-group">
                <label for="testName">Test Name:</label>
                <input type="text" id="testName" name="testName" required>
            </div>
            <div class="form-group">
                <label for="testPrice">Price:</label>
                <input type="number" id="testPrice" name="testPrice" required>
            </div>
            <button type="submit">Add Test</button>
        </form>
    `;

    // Handle form submission
    document.getElementById('addTestForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const testName = document.getElementById('testName').value;
        const testPrice = document.getElementById('testPrice').value;

        // Add logic to save the test (e.g., send to server or update local state)
        const testList = document.getElementById('testList');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${testList.children.length + 1}</td>
            <td>${testName}</td>
            <td>${testPrice}</td>
            <td>
                <button onclick="editTest(this)">Edit</button>
                <button onclick="deleteTest(this)">Delete</button>
            </td>
        `;
        testList.appendChild(newRow);

        alert(`Test Added: ${testName}, $${testPrice}`);
        container.innerHTML = ''; // Clear the form after submission
    });
}

function addLab() {
    alert('Add Lab functionality to be implemented.');
}

// Placeholder functions for edit and delete actions
function editUser(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    const userName = cells[1].textContent;
    const userEmail = cells[2].textContent;
    const userRole = cells[3].textContent;

    alert(`Edit User: ${userName}, ${userEmail}, ${userRole}`);
}

function deleteUser(button) {
    const row = button.closest('tr');
    row.remove();
    alert('User deleted successfully.');
}

function editTest(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    const testName = cells[1].textContent;
    const testPrice = cells[2].textContent;

    alert(`Edit Test: ${testName}, $${testPrice}`);
}

function deleteTest(button) {
    const row = button.closest('tr');
    row.remove();
    alert('Test deleted successfully.');
}