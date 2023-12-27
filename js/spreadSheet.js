const scriptURL = "https://script.google.com/macros/s/AKfycbzwCxmiOGEbQ_jFBE9p-ptUG9Ln-roAqottX2DbsQN2iSiy-Kghjwpq9M28Al-rEaKffA/exec";
const form = document.forms["submit-to-google-sheet"];

const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

function closeAlert(event) {
  let AlertClose = event.target;
  AlertClose.closest(".alert-close").remove();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alertSuccess.classList.toggle("alert");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      alertDanger.classList.toggle("alert");
      form.reset();
      console.error("Error!", error.message);
    });
});
