
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

