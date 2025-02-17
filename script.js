
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) =>{
            const value = e.target.value;
            
            // Allow only a single digit
            e.target.value = value.replace(/\D/g, "").charAt(0);

            // Move focus to the next input if a number is entered
            if (e.target.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            // Handle backspace key press
            if (e.key === "Backspace") {
                if (e.target.value === "" && index > 0) {
                    inputs[index - 1].value = ""; // Clear previous field
                    inputs[index - 1].focus(); // Move focus back
                }
            }

            // Handle left arrow key (move focus to previous field)
            if (e.key === "ArrowLeft" && index > 0) {
                inputs[index - 1].focus();
            }

            // Handle right arrow key (move focus to next field)
            if (e.key === "ArrowRight" && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Ensure focus moves to the first empty input when clicked
        input.addEventListener("click", () => {
            if (!input.value) {
                for (let i = 0; i < inputs.length; i++) {
                    if (!inputs[i].value) {
                        inputs[i].focus();
                        break;
                    }
                }
            }
        });
    });

