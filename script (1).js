/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


/* ================= INVESTMENT CALCULATOR ================= */

function calculateInvestment() {

    const amount =
        Number(document.getElementById("amount").value);

    const weeks =
        Number(document.getElementById("weeks").value);


    if (amount <= 0) {

        alert("Please enter a valid investment amount.");

        return;
    }


    if (weeks <= 0) {

        alert("Please enter at least 1 week.");

        return;
    }


    /*
       This is a simple illustration using
       20% per week.

       It does NOT represent a guaranteed return.
    */

    const weeklyRate = 0.20;

    const profit =
        amount * weeklyRate * weeks;

    const total =
        amount + profit;


    document.getElementById("startAmount").textContent =
        formatUGX(amount);

    document.getElementById("profitAmount").textContent =
        formatUGX(profit);

    document.getElementById("totalAmount").textContent =
        formatUGX(total);

}


/* ================= CURRENCY FORMAT ================= */

function formatUGX(value) {

    return "UGX " + Math.round(value).toLocaleString();

}