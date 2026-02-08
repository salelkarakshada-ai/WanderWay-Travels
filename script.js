function searchDestination() {
    document.getElementById('searchBtn').addEventListener('click', function() {
        var query = document.getElementById("searchBox").value.toLowerCase().trim();
        if (query === "goa") {
            window.location.href = "packages.html#goa";
        } else if (query === "paris") {
            window.location.href = "packages.html#paris";
        } else if (query === "dubai") {
            window.location.href = "packages.html#dubai";
        } else if (query === "manali") {
            window.location.href = "packages.html#manali";
        } else {
            alert("Destination not found");
        }
    });
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onload = function () {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("captchaQuestion").innerText =
        "What is " + num1 + " + " + num2 + "?";

    window.validateCaptcha = function () {
      
        const userAnswer = document.getElementById("captchaAnswer").value;
        if (parseInt(userAnswer) !== num1 + num2) {
            alert("Incorrect captcha. Try again!");
            return false;
        }
        alert("Message sent successfully");
        return true;
    };
};


