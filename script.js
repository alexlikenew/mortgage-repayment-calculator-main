const submitBtn = document.querySelector('.main-box__left__form__button')
const mortgageAmountInput = document.querySelector('#mortgageAmount')
const mortgageTermInput = document.querySelector('#mortgageTerm')
const mortgageRateInput = document.querySelector('#mortgageRate')
const mortgageCheckbox = document.querySelectorAll('.main-box__left__form__input--type__checkbox--holder')

// console.log(mortgageAmountInput.nextElementSibling);

const checkform = () => {
	if (mortgageAmountInput.value === '') {
		mortgageAmountInput.nextElementSibling.style.display = 'block'
		console.log(mortgageAmountInput.value)
        
	}else{
        mortgageAmountInput.nextElementSibling.style.display = 'none'
    }
	if (mortgageTermInput.value === '') {
		mortgageTermInput.nextElementSibling.style.display = 'block'
		console.log('Hello')
	}else{
        mortgageTermInput.nextElementSibling.style.display = 'none'
    }
	if (mortgageRateInput.value === '') {
		mortgageRateInput.nextElementSibling.style.display = 'block'
		console.log('Hello')
	}else{
        mortgageRateInput.nextElementSibling.style.display = 'none'
    }
}
const calculateMortgage = () => {
	checkform()
}

function handleForm(event) {
	event.preventDefault()
}
submitBtn.addEventListener('click', calculateMortgage)
submitBtn.addEventListener('click', handleForm)
