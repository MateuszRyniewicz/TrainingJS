const amountOne = document.querySelector('.amount-one');
const amountTwo = document.querySelector('.amount-two');
const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const rateInfo = document.querySelector('.rate-info');
const swapBtn = document.querySelector('.swap');

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`
	)
		.then((res) => res.json())
		.then((data) => {
			current1 = currencyOne.value;
			current2 = currencyTwo.value;

			const rate = data.rates[current2];
			rateInfo.textContent = `1 ${current1} - ${rate.toFixed(4)} : ${current2}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};

const swap = () => {
	const swapValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = swapValue;
	calculate();
};

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap);
calculate();
