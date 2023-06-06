const form = document.getElementById('form')

const cttname = document.getElementById('cttname')

const cttemail = document.getElementById('cttemail')

const cttphonenumber = document.getElementById('cttphonenumber')

const cttmessage = document.getElementById('cttmessage')


const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

cttphonenumber.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const value = e.target.value
    cttphonenumber.value = phoneMask(value)
})


function checkInputs() {
    console.log('entrou')
    const cttnameValue = cttname.value.trim()
    const cttemailValue = cttemail.value.trim()
    const cttphonenumberValue = cttphonenumber.value.trim()
    const cttmessageValue = cttmessage.value.trim()

    if (cttnameValue === '') {
        errorValidation(cttname, 'Preencha este campo')
    } else {
        successValidation(cttname)
    }

    if (cttemailValue === '') {
        errorValidation(cttemail, 'Preencha este campo')
    } else {
        successValidation(cttemail)
    }

    if (cttphonenumberValue.length < 14) {
        errorValidation(cttphonenumber, 'Número de telefone inválido')
    } else {
        successValidation(cttphonenumber)
    }

    if (cttmessageValue === '') {
        errorValidation(cttmessage, 'Preencha este campo')
    } else {
        successValidation(cttmessage)
    }

}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}
