const form = document.querySelector('.form')
const toast = document.querySelector('.toast__form')
const firstError = document.querySelector('.firt__error')
const emailError = document.querySelector('.email__error')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget))
  if(!data.first) {
    firstError.textContent = '* First name is required'
  } else {
    firstError.textContent = ''
  }
  if(!data.email) {
    emailError.textContent = '* Email is required'
  } else {
    emailError.textContent = ''
  }
  if(data.first && data.email) {
    toast.classList.add('show')
    e.currentTarget.reset()
    setTimeout(() => {
      toast.classList.remove('show')
    }, 2000)
  }
})