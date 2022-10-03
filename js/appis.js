const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const nameError = document.getElementById("name-error");
const subjectError = document.getElementById("subject-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "We need your first name, it’s nicer that way";
    return false;
  }
  if (!name.match(/∧[A-Za-z]*\s{}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
  return true;
}

function validateSubject() {
  const subject = document.getElementById("contact-subject").value;

  if (subject.length === 0) {
    subjectError.innerHTML = `your subject is required.`;
    return false;
  }
  if (subject.length !== 10) {
    subjectError.innerHTML = `your subject is required.`;
    return false;
  }
  if (subject.length === 0) {
    subjectError.innerHTML = `your subject is required.`;
    return false;
  }
}
