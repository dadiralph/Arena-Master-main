function togglePassword(icon) {
    let passwordField = icon.closest(".input-field").querySelector("input"); // Selects the input field in the same container
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.replace("bx-low-vision", "bx-show"); // Change icon when visible
    } else {
        passwordField.type = "password";
        icon.classList.replace("bx-show", "bx-low-vision"); // Change icon when hidden
    }
}
