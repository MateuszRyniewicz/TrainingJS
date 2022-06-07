const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const error = document.querySelector('.error');
const costtInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBall = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'The fields are empty';
		costtInfo.style.display = 'none';
	} else {
		error.textContent = '';
		countBill();
	}
};

countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const suma = (newPrice + newPrice * newTip) / newPeople;
	costtInfo.style.display = 'block';

	cost.textContent = suma.toFixed(2);
};

button.addEventListener('click', showBall);
