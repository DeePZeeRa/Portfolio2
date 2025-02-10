const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", () => {
  sideBar.classList.toggle("open-sidebar");
  sideBar.classList.toggle("close-sidebar");
});

const close = document.querySelector(".close-icon");

close.addEventListener("click", () => {
  sideBar.classList.toggle("open-sidebar");
  sideBar.classList.toggle("close-sidebar");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxx7wKFkxnow-2hLqW26jnE7NhUV0L2VREm_pRR2tN8Kug3X1yhlmxbkn1qVT9uJPOctw/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// document.addEventListener("DOMContentLoaded", function () {
//         const form = document.querySelector(".contact-box form");

//         form.addEventListener("submit", function (event) {
//             let valid = true;
//             const name = form["Name"].value.trim();
//             const email = form["Email"].value.trim();
//             const phone = form["phone"].value.trim();
//             const message = form["Message"].value.trim();

//             if (name === "") {
//                 alert("Please enter your full name.");
//                 valid = false;
//             }

//             const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!email.match(emailPattern)) {
//                 alert("Please enter a valid email address.");
//                 valid = false;
//             }
//             const phonePattern = /^[0-9]{10,15}$/;
//             if (phone !== "" && !phone.match(phonePattern)) {
//                 alert("Please enter a valid phone number (10-15 digits).");
//                 valid = false;
//             }

//             if (message === "") {
//                 alert("Please enter your message.");
//                 valid = false;
//             }
//             if (!valid) {
//                 event.preventDefault();
//             }
//         });
//     });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-box form");
  const submitButton = form.querySelector("button");

  form.addEventListener("submit", function (event) {
    let valid = true;
    const name = form["Name"].value.trim();
    const email = form["Email"].value.trim();
    const phone = form["phone"].value.trim();
    const message = form["Message"].value.trim();

    // Name validation
    if (name === "") {
      alert("Please enter your full name.");
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      valid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (phone !== "" && !phone.match(phonePattern)) {
      alert("Please enter a valid phone number (10-15 digits).");
      valid = false;
    }

    // Message validation
    if (message === "") {
      alert("Please enter your message.");
      valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
      event.preventDefault();
    } else {
      // Disable the button and change its appearance
      submitButton.disabled = true;
      submitButton.textContent = "Sent!";
      submitButton.style.backgroundColor = "yellow";
      submitButton.style.cursor = "not-allowed";
      submitButton.style.boxShadow = "none";
    }
  });
});
