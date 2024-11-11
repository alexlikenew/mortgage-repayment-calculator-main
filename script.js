const submitBtn = document.querySelector('.main-box__left__form__button')
const mortgageAmountInput = document.querySelector('#mortgageAmount')
const mortgageTermInput = document.querySelector('#mortgageTerm')
const mortgageRateInput = document.querySelector('#mortgageRate')
const mortgageCheckbox = document.querySelectorAll('.main-box__left__form__input--type__checkbox--holder')
const checkform = () => {
	if (mortgageAmountInput.value === '') {
		mortgageAmountInput.nextElementSibling.style.display = 'block'
	} else {
		mortgageAmountInput.nextElementSibling.style.display = 'none'
	}
	if (mortgageTermInput.value === '') {
		mortgageTermInput.nextElementSibling.style.display = 'block'
	} else {
		mortgageTermInput.nextElementSibling.style.display = 'none'
	}
	if (mortgageRateInput.value === '') {
		mortgageRateInput.nextElementSibling.style.display = 'block'
	} else {
		mortgageRateInput.nextElementSibling.style.display = 'none'
	}
}
const calculate = () => {
	const interestAmount = ((mortgageRateInput.value * mortgageTermInput.value) / 100) * mortgageAmountInput.value
}
const calculateMortgage = () => {
	checkform()
	calculate()
}
function handleForm(event) {
	event.preventDefault()
}
submitBtn.addEventListener('click', calculateMortgage)
submitBtn.addEventListener('click', handleForm)
