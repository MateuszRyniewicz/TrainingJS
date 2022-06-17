const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const available = document.querySelector('.available-money');
const addTranPanel = document.querySelector('.add-transaction-panel');

const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransationBtn = document.querySelector('.add-transaction');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');
const deleteAllBtn = document.querySelector('.delete-all');

const rot = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
	addTranPanel.style.display = 'flex';
};

const cancelPanel = () => {
	addTranPanel.style.display = 'none';
	clearInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== '' &&
		amountInput.value !== '' &&
		categorySelect.value !== 'none'
	) {
		createNewTransaction();
	} else {
		alert('You have to write all filds');
	}
};

const createNewTransaction = () => {
	const newTransaction = document.createElement('div');
	newTransaction.classList.add('transaction');
	newTransaction.setAttribute('id', ID);

	CheckCategory(selectedCategory);

	newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
                        <p class="transaction-amount">${amountInput.value} <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
                        </p>`;

	amountInput.value > 0
		? incomeSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('income')
		: expensesSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('expense');

	moneyArr.push(parseFloat(amountInput.value));
	cancelPanel();
	ID++;
	clearInputs();
};

const CheckCategory = (transaction) => {
	switch (transaction) {
		case '"+" Income':
			categoryIcon = "<i class='fas fa-money-bill-wave'></i>";
		case '"-" Shopping':
			categoryIcon = "<i class='fas fa-cart-arrow-down'></i>";
			break;
		case '"-" Food':
			categoryIcon = "<i class='fas fa-hamburger'></i>";
			break;
		case '"-" Cinema':
			categoryIcon = "<i class='fas fa-film'></i>";
			break;
	}
};

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

const clearInputs = () => {
	nameInput.value = '';
	amountInput.value = '';
	categorySelect.selectedIndex = 0;
};

addTransationBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', cancelPanel);
saveBtn.addEventListener('click', checkForm);
