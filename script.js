// $ (document).ready(function(){
//     $('.banner-slide').slick();
// });


// Latest Blog Start
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenContent = document.querySelector(".hidden-content");

    toggleButton.addEventListener("click", function () {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            toggleButton.textContent = "Read Less";
        } else {
            hiddenContent.style.display = "none";
            toggleButton.textContent = "Read More";
        }
    });
});

//Latest Blog Ends

// Footer Start
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
//Footer Ends