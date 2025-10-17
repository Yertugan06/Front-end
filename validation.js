// Example starter JavaScript for disabling form submissions if there are invalid fields
      (() => {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
          form.addEventListener(
            "submit",
            (event) => {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();
      function validatePasswordMatch() {
          if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords must match");
          } else {
            confirmPassword.setCustomValidity("");
          }
        }

        password.addEventListener("input", validatePasswordMatch);
        confirmPassword.addEventListener("input", validatePasswordMatch);