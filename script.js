document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.querySelector("form").reset();
    });
});
