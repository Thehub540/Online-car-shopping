document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".book-now-button");

    const isUserLoggedIn = () => {
        return sessionStorage.getItem("loggedIn") === "true";
    };

    bookButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); 
            
            const carName = button.getAttribute("data-car");

            if (isUserLoggedIn()) {
               
                window.location.href = `booking.html?car=${encodeURIComponent(carName)}`;
            } else {
                alert("Please log in or sign up to book this car.");
                window.location.href = `signup.html?car=${encodeURIComponent(carName)}`;
            }
        });
    });
});
