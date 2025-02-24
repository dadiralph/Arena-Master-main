function togglePassword() {
    let passwordField = document.getElementById("password");
    let icon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.replace("bx-low-vision", "bx-show"); // Change icon when visible
    } else {
        passwordField.type = "password";
        icon.classList.replace("bx-show", "bx-low-vision"); // Change icon when hidden
    }
}
