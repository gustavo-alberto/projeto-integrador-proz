document.addEventListener('keydown', () => {
  const form = document.querySelector('form.page-content')
  const nome = form.querySelector("input[placeholder='Nome']")
  const senha = form.querySelector("input[placeholder='Senha']")
  const repitaSenha = form.querySelector("input[placeholder='Repita a senha']")
  const email = form.querySelector("input[placeholder='Email']")
  const button = form.querySelector("button[type='submit']")

  function validateInput(input, condition) {
    if (condition) {
      input.parentElement.classList.remove('select-container-item-error')
    } else {
      input.parentElement.classList.add('select-container-item-error')
    }
  }

  function validateName() {
    const namePattern = /^[^\d]+$/
    const isValid = namePattern.test(nome.value.trim())
    validateInput(nome, isValid)
    return isValid
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailPattern.test(email.value.trim())
    validateInput(email, isValid)
    return isValid
  }

  function validatePassword() {
    const isValid = senha.value.trim().length > 8
    validateInput(senha, isValid)
    return isValid
  }

  function validateRepeatPassword() {
    const isValid = repitaSenha.value === senha.value && repitaSenha.value.trim() !== ''
    validateInput(repitaSenha, isValid)
    return isValid
  }

  function validateForm(event) {
    const isFormValid = validateName() && validateEmail() && validatePassword()

    if (!isFormValid) {
      event.preventDefault()
    }
  }

  function toggleSubmitButton() {
    const isFormValid = validateName() && validateEmail() && validatePassword()

    // Habilitar o botão apenas se todos os campos estiverem validados
    button.disabled = !isFormValid

    // Remover a classe de botão desabilitado quando o botão está habilitado
    if (button.disabled) {
      button.classList.remove('button-primary')
      button.classList.add('button-disabled')
    } else {
      button.classList.remove('button-disabled')
      button.classList.add('button-primary')
    }
  }

  // Adicionar ouvintes de eventos de entrada para cada campo
  nome.addEventListener('input', toggleSubmitButton)
  email.addEventListener('input', toggleSubmitButton)
  senha.addEventListener('input', () => {
    validatePassword()
    toggleSubmitButton()
  })

  // Ouvinte de evento para o envio do formulário
  button.addEventListener('click', validateForm)

  // Inicialmente desabilitar o botão de envio
  button.disabled = true
})
