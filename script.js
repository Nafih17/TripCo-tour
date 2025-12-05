<<<<<<< HEAD
const scriptURL = "https://script.google.com/macros/s/AKfycby3aE-8iWY-zxufuYKVdwS2Y86oB7W0ve-Txi7uKrV8ItFPpZfBAf7gOwWbRAzDJ2-2/exec";

const form = document.getElementById("enquiryform");
const message = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      message.innerHTML = "Thank you! Your enquiry has been submitted successfully.";
      message.style.color = "green";
      form.reset();
    })
    .catch(() => {
      message.innerHTML = "Error! Please try again later.";
      message.style.color = "red";
    });
});
=======
const scriptURL = "https://script.google.com/macros/s/AKfycby3aE-8iWY-zxufuYKVdwS2Y86oB7W0ve-Txi7uKrV8ItFPpZfBAf7gOwWbRAzDJ2-2/exec";

const form = document.getElementById("enquiryform");
const message = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      message.innerHTML = "Thank you! Your enquiry has been submitted successfully.";
      message.style.color = "green";
      form.reset();
    })
    .catch(() => {
      message.innerHTML = "Error! Please try again later.";
      message.style.color = "red";
    });
});
>>>>>>> 5c0d27a3a0e9db427ca68f7e6eb51aed182d0651
