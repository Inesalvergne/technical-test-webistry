// Valid email?
const validEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

// Checked?
const checked = (checkbox) => {
  return checkbox.checked
}

// Validation logic
const emailValidationText = document.querySelector("#emailValidationText")
const checkboxValidationText = document.querySelector("#checkboxValidationText")
const formContainer = document.querySelector(".form-container")
const formTitle = document.querySelector(".form-title")
const validation = (email, checkbox, name) => {
  if (validEmail(email) === false && checked(checkbox) === false ) {
    emailValidationText.classList.remove("display-none")
    checkboxValidationText.classList.remove("display-none")
  } else if (checked(checkbox) === false) {
    checkboxValidationText.classList.remove("display-none")
  } else if (validEmail(email) === false) {
    emailValidationText.classList.remove("display-none")
  } else {
    form.remove()
    formTitle.remove()
    const successTag = `<div id="success-message">
    <p> <span class="green-text">Success, ${name}!</span><br>You're all set. </p>
    </div>`
    formContainer.insertAdjacentHTML("afterbegin", successTag);
  }
}

const form = document.querySelector("#form")
form.addEventListener("submit", (event) => {
  const email = document.querySelector("#email").value
  const checkbox = document.querySelector("#accurate")
  const name = document.querySelector("#name").value
  event.preventDefault()
  validation(email, checkbox, name)
})
