/*
 * script.js
 * JavaScript for Fixed Deposit Returns Calculator
 * Author: [Your Name]
 * Date: [Date]
 */

// Array containing the deposit schemes
// Each scheme includes duration (in years) and rate of interest
const schemes = [
    { duration: 1, rate: 5.0 }, // 1-year duration with 5% interest
    { duration: 2, rate: 5.5 }, // 2-year duration with 5.5% interest
    { duration: 3, rate: 6.0 }, // 3-year duration with 6% interest
    { duration: 5, rate: 6.5 }  // 5-year duration with 6.5% interest
];

/*
 * Function to calculate returns when the user clicks the button
 */
document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get the amount entered by the user
    const amount = parseFloat(document.getElementById("amount").value);

    // Get the selected duration from the dropdown
    const duration = parseInt(document.getElementById("duration").value);

    // Validate user input
    if (isNaN(amount) || isNaN(duration)) {
        alert("Please fill in all fields correctly!"); // Display alert for invalid inputs
        return;
    }

    // Find the matching scheme for the selected duration
    const scheme = schemes.find(s => s.duration === duration);

    // If no matching scheme is found, display an error
    if (!scheme) {
        alert("No scheme available for the selected duration.");
        return;
    }

    // Extract the rate of interest from the scheme
    const rate = scheme.rate;

    // Calculate maturity amount using the formula:
    // Maturity = Principal + (Principal × Rate × Duration) / 100
    const maturity = amount + (amount * rate * duration) / 100;

    // Calculate the invest value (interest earned)
    const invest = (amount * rate * duration) / 100;

    // Update the result section with calculated values
    document.getElementById("principal").textContent = amount.toFixed(2); // Display the principal amount
    document.getElementById("rate").textContent = rate; // Display the interest rate
    document.getElementById("invest").textContent = invest.toFixed(2); // Display the interest earned
    document.getElementById("maturity").textContent = maturity.toFixed(2); // Display the maturity amount

    // Show the result section
    document.getElementById("result").style.display = "block";
});
