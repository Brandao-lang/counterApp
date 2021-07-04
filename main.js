
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let resetBtn = document.getElementById('reset')
let incrementerForm = document.getElementById('increment')

let currentIncrementer = 1

function subtract() {
    let number = document.getElementById('number')
    number.innerHTML = number.innerHTML - currentIncrementer
}

function add() {
    let addnum = document.getElementById('number')
    let newNum = addnum.textContent
    newNum = +newNum + +currentIncrementer
    addnum.textContent = newNum
}

function reset() {
    let resetNum = document.getElementById('number')
    resetNum.textContent = 0
    let customNum = document.getElementById('custom')
    customNum.value = ""
    currentIncrementer = 1

}

function customNum(e) {
    e.preventDefault()
    let customNum = document.getElementById('custom')
    let verifyIncrementer = customNum.value
    if (isNaN(verifyIncrementer)) {
        alert('Invalid number entered')
        return
    }
    currentIncrementer = customNum.value
    customNum.value = ""
}

minusBtn.addEventListener('click', subtract)
plusBtn.addEventListener('click', add)
resetBtn.addEventListener('click', reset)
incrementerForm.addEventListener('submit', customNum)
