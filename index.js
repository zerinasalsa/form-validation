document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstNameInput = form["firstName"];
  const lastNameInput = form["lastName"];
  const ageInput = form["age"];
  const outputMessage = document.getElementById("outputMessage");

  const invalidInputs = ["boolean", "null", "undefined", "number", "object"];

  function isValidName(name) {
    return (
      /^[a-zA-Z\s]+$/.test(name) && !invalidInputs.includes(name.toLowerCase())
    );
  }

  function preventInvalidInput(inputElement) {
    inputElement.addEventListener("input", function () {
      if (!isValidName(inputElement.value.trim())) {
        inputElement.value = inputElement.value.slice(0, -1);
      }
    });
  }

  preventInvalidInput(firstNameInput);
  preventInvalidInput(lastNameInput);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate First Name
    if (!isValidName(firstNameInput.value)) {
      document.getElementById("firstNameError").style.display = "block";
      document.getElementById("firstNameSuccess").style.display = "none";
      isValid = false;
    } else {
      document.getElementById("firstNameError").style.display = "none";
      document.getElementById("firstNameSuccess").style.display = "block";
    }

    // Validate Last Name
    if (!isValidName(lastNameInput.value)) {
      document.getElementById("lastNameError").style.display = "block";
      document.getElementById("lastNameSuccess").style.display = "none";
      isValid = false;
    } else {
      document.getElementById("lastNameError").style.display = "none";
      document.getElementById("lastNameSuccess").style.display = "block";
    }

    // Validate Age
    if (ageInput.value < 0) {
      ageInput.value = 0;
    }
    if (ageInput.value === "" || ageInput.value < 17) {
      document.getElementById("ageError").style.display = "block";
      document.getElementById("ageSuccess").style.display = "none";
      isValid = false;
    } else {
      document.getElementById("ageError").style.display = "none";
      document.getElementById("ageSuccess").style.display = "block";
    }

    if (isValid) {
      const fullName =
        firstNameInput.value.trim() + " " + lastNameInput.value.trim();
      outputMessage.innerText = `Hi ${firstNameInput.value}, data anda telah kami terima.\n\nNama : ${fullName}\nUmur : ${ageInput.value}`;
      document.getElementById("form-container").style.display = "none";
      document.getElementById("output-container").style.display = "block";
    }
  });

  document
    .getElementById("newDataButton")
    .addEventListener("click", function () {
      form.reset();
      document.getElementById("form-container").style.display = "block";
      document.getElementById("output-container").style.display = "none";
      document.querySelectorAll(".success-message").forEach(function (element) {
        element.style.display = "none";
      });
    });
});
