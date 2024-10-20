
// MATCH RESULTS PAGE


// SPAN HAS TWO MESSAGE WIN OR LOSS, to color according to the results, I have set color 
// Green to WIN span and Color Red to LOSS text in html 
// instead of doind inline style I made this function

// Always use query selector all for multiple elements with foreach loop
document.addEventListener("DOMContentLoaded", function() {
    var results = document.querySelectorAll("#results");

    results.forEach(function(result) {

        if (result.textContent.trim() === "LOSS") {
            result.style.color = "red";
        }
        else {
            result.style.color = "green";
        }
    });
});