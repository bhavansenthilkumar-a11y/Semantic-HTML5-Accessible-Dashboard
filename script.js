// User form elements
const form = document.getElementById("user-form");
const usersList = document.getElementById("users-list");

// Add a new user
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const name = document.getElementById("full-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const role = document.getElementById("user-role").value;

    if (!name || !email || !role) {
        return;
    }

    const row = document.createElement("tr");

    [name, email, role, "Active"].forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    usersList.appendChild(row);

    form.reset();
    document.getElementById("full-name").focus();
});

// Modal dialog elements
const viewButton = document.getElementById("view-user-btn");
const userDialog = document.getElementById("user-dialog");
const closeButton = document.getElementById("close-dialog-btn");

const detailName = document.getElementById("detail-name");
const detailEmail = document.getElementById("detail-email");
const detailRole = document.getElementById("detail-role");

// Display the latest user in the table
viewButton.addEventListener("click", function () {
    const rows = usersList.querySelectorAll("tr");
    const lastRow = rows[rows.length - 1];

    if (lastRow) {
        const cells = lastRow.querySelectorAll("td");

        detailName.textContent = cells[0].textContent;
        detailEmail.textContent = cells[1].textContent;
        detailRole.textContent = cells[2].textContent;
    }

    userDialog.showModal();

    // Move keyboard focus to the Close button
    closeButton.focus();
});

// Close only when the Close button is clicked
closeButton.addEventListener("click", function () {
    userDialog.close();
});

// Close when Escape is pressed
userDialog.addEventListener("cancel", function () {
    userDialog.close();
});

// Keep keyboard focus inside the modal
userDialog.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
        closeButton.focus();
    }
});
