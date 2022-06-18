const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const addTransactionPanel = document.querySelector('.add-transaction-panel');

const nameInput = document.querySelector('#name');
const inputAmount = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransactionPanelBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');
const deleteAll = document.querySelector('.delete-all');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
	addTransactionPanel.style.display = 'flex';
};

const closePanel = () => {
	addTransactionPanel.style.display = 'none';
	claerInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== '' &&
		inputAmount.value !== '' &&
		categorySelect.value !== 'none'
	) {
		createNewTransaction();
	} else {
		alert('you have to write all fields');
	}
};

const claerInputs = () => {
	nameInput.value = '';
	inputAmount.value = '';
	categorySelect.selectedIndex = 0;
};

const createNewTransaction = () => {
	const newTransaction = document.createElement('div');
	newTransaction.classList.add('transatcion');
	newTransaction.setAttribute('id', ID);
	checkCategory(selectedCategory);
	newTransaction.innerHTML = `
	<p class="transaction-name">${categoryIcon}</i>${nameInput.value}</p>
                        <p class="transatcion-amount">${inputAmount.value} PLN <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
                        </p>

	`;

	inputAmount.value > 0
		? incomeSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('income')
		: expensesSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('expense');

	moneyArr.push(parseFloat(inputAmount.value));
	countMoney(moneyArr);
	closePanel();
	ID++;
	claerInputs();
};
const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

const checkCategory = (trans) => {
	switch (trans) {
		case '(+) Income':
			categoryIcon = "<i class='fas fa-money-bill-wave'></i>";
			break;
		case '(-) Shopping':
			categoryIcon = "<i class='fas fa-cart-arrow-down'></i>";
			break;

		case '(-) Foods':
			categoryIcon = "<i class='fas fa-hamburger'></i>";
			break;

		case '(-) Cinema':
			categoryIcon = "<i class='fas fa-film'></i>";
			break;
	}
};

const countMoney = (money) => {
	const newMoney = money.reduce((a, b) => a + b);
	availableMoney.textContent = `${newMoney} PLN`;
};

const deleteTransaction = (id) => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(
		transactionToDelete.childNodes[3].innerText
	);
	const transactionIndexOf = moneyArr.indexOf(transactionAmount);
	moneyArr.splice(transactionIndexOf, 1);
	countMoney(moneyArr);

	transactionToDelete.classList.contains('income')
		? incomeSection.removeChild(transactionToDelete)
		: expensesSection.removeChild(transactionToDelete);
};

const deleteAllTransaction = () => {
	incomeSection.innerHTML = '<h3>Income:</h3>';
	expensesSection.innerHTML = '<h3>Expenses:</h3>';
	availableMoney.textContent = '0';
	moneyArr = [0];
};

const changeStyleToLight = () => {
	root.style.setProperty('--first-color', '#f9f9f9');
	root.style.setProperty('--second-color', '#14161f');
	root.style.setProperty('--border-color', 'rgba(0,0,0,0.2');
};

const changeStyleToDark = () => {
	root.style.setProperty('--first-color', '#14161f');
	root.style.setProperty('--second-color', '#f9f9f9');
	root.style.setProperty('--border-color', 'rgba(255,255,255,0.4');
};
addTransactionPanelBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm);
deleteAll.addEventListener('click', deleteAllTransaction);
lightBtn.addEventListener('click', changeStyleToLight);
darkBtn.addEventListener('click', changeStyleToDark);
