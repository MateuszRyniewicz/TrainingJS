const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#e-mail');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLenght = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} must have min ${min} signs`
		);
	}
};

checkPasword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'pass is not correct');
		console.log(pass2.value);
		console.log(pass1.value);
	}
};

checkEmial = (email) => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (reg.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'e- mail is not corret');
	}
};

checkError = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('show-popup');
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, pass, pass2, email]);
	checkLenght(username, 3);
	checkLenght(pass, 2);
	checkPasword(pass, pass2);
	checkEmial(email);
	checkError();
});
clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	[username, pass, pass2, email].forEach((el) => {
		el.value = '';
		clearError(el);
	});
});
