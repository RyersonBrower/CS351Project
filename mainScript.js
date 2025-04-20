const orderButton = document.getElementById("button2");
const modal = document.getElementById("orderModal");
const closeButton = document.querySelector(".close-button");

orderButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Load customer names from server
function loadCustomers() {
    fetch("http://localhost:3000/customers")
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const customerSelect = document.getElementById("customerSelect");
                customerSelect.innerHTML = '<option value="">-- Select a Customer --</option>';

                data.data.forEach(customer => {
                    const option = document.createElement("option");
                    option.value = customer.CustomerNum;
                    option.textContent = customer.CustomerName;
                    customerSelect.appendChild(option);
                });
            } else {
                alert("Could not load customer list.");
            }
        })
        .catch(error => {
            console.error("Error loading customers:", error);
            alert("Error fetching customer list.");
        });
}

// Generate order report
document.getElementById("submitOrderReport").addEventListener("click", () => {
    const selectedNum = document.getElementById("customerSelect").value;

    if (selectedNum) {
        fetch("http://localhost:3000/order-report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ customerNum: selectedNum }),
        })
        .then(async response => {
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Fetch failed: ${errorText}`);
            }
            return response.json();
        })
        .then(data => {
            const reportResult = document.getElementById("reportResult");
            console.log("Order report response:", data);

            if (data.success) {
                let totalPrice = data.data.TotalQuotedPrice;

                // Convert if it's a string
                if (typeof totalPrice === "string") {
                    totalPrice = parseFloat(totalPrice);
                }

                if (typeof totalPrice === "number" && !isNaN(totalPrice)) {
                    reportResult.innerHTML = `
                        <h3>Customer: ${data.data.CustomerName}</h3>
                        <p><strong>Total Quoted Price:</strong> $${totalPrice.toFixed(2)}</p>
                    `;
                } else {
                    reportResult.innerHTML = `
                        <h3>Customer: ${data.data.CustomerName}</h3>
                        <p style="color:orange;"><strong>Total Quoted Price:</strong> No valid total available.</p>
                    `;
                }
            } else {
                reportResult.innerHTML = `<p style="color:red;">${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Error during fetch:", error);
            alert("Server error while generating report.");
        });
    } else {
        alert("Please select a customer.");
    }
});

// Load customers on page load
document.addEventListener("DOMContentLoaded", loadCustomers);