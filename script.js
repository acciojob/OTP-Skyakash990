//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

    // Function to handle typing in OTP input fields
    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1) {
                // Move focus to the next input field
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        // Handle backspace key press
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && e.target.value === "") {
                // Move focus to the previous input field
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });