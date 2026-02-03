document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()

    let isValid = true

    let tel = document.getElementById('tel')
    let radio = document.getElementById('radio')

    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(error => error.remove())
    }

    const errorForm = (message,input) => {
        let errorEl = document.createElement('div')
        errorEl.className = 'error-text'
        errorEl.textContent = message
        errorEl.style.color = 'red'
        errorEl.style.fontSize = '14px'
        input.parentElement.appendChild(errorEl)
        isValid = false
    }

    clearErrors()

    if(!/^\+.{8,12}$/.test(tel.value.trim())) {
        errorForm('Введите коректный номер телефона', tel)
    }

    if(!radio.checked) {
        errorForm('необходимо отмететь галочку', radio)
    }

    if(isValid) {
        alert('Форма успешно отправлена')
        document.getElementById('form').reset()
    }
})


