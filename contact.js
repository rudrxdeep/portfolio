const scriptURL = 'https://script.google.com/macros/s/AKfycbxDyDJi_7XN5SJXABevXyf5AKhC9sXtE1ilOWqcFQ-uRqZlybN7HnHxA4ZIbuvKRBjQ0w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})