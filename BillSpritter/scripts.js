const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill = () => {
	if (price.value == '' || people.value == '' || tip == 0) {
		error.textContent = 'The filds are empty';
		costInfo.style.display = 'none';
	} else {
		error.textContent = '';
		countBill();
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const suma = (newPrice + newPrice * newTip) / newPeople;
	costInfo.style.display = 'block';
	costInfo.textContent = suma.toFixed(2);
};
button.addEventListener('click', showBill);
