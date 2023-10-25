const form = document.querySelector('form')
const min = document.getElementById('minute')
const sec = document.getElementById('second')
const mlSec = document.getElementById('mlsSec')
const button = document.getElementById('button')
const text = document.getElementById('text')

let inputMin, inputSec, inputMlSec

function formSubmit(e) {
    e.preventDefault()
    min.innerText = ''
    sec.innerText = ''
    mlSec.innerText = ''
}

function handleMin({target: {value}}) {
    window.API.setMin(value)
    inputMin = value
}

function handleSec({target: {value}}) {
    window.API.setSec(value)
    inputSec = value
}

function handleMlSec({target: {value}}) {
    window.API.setMlSec(value)
    inputMlSec = value
}

function handleClick() {
    window.API.setClick(true)
    if (inputMin < 10) inputMin = '0' + inputMin
    if (inputSec.length < 2) inputSec = '0' + inputSec
    if (inputMlSec.length < 3) inputMlSec = '0' + inputMlSec
    text.textContent = `Click at ${inputMin ? inputMin : 0} : ${inputSec ? inputSec : 0} : ${inputMlSec ? inputMlSec : 0}`
}

form.addEventListener('submit', formSubmit)
min.addEventListener('change', handleMin)
sec.addEventListener('change', handleSec)
mlSec.addEventListener('change', handleMlSec)
button.addEventListener('click', handleClick)