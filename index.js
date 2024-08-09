document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstNameInput = form["firstName"];
  const lastNameInput = form["lastName"];
  const ageInput = form["age"];
  const outputMessage = document.getElementById("outputMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate First Name
    if (firstNameInput.value.trim() === "") {
      document.getElementById("firstNameError").style.display = "block";
      document.getElementById("firstNameSuccess").style.display = "none";
      isValid = false;
    } else {
      document.getElementById("firstNameError").style.display = "none";
      document.getElementById("firstNameSuccess").style.display = "block";
    }

    // Validate Last Name
    if (lastNameInput.value.trim() === "") {
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
