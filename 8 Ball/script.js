const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = [
	'Yes!',
	'No',
	'Maybe',
	'I do not know, You want not to know about this answer!',
	'it is hard to say...',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generatorAnswer();
		error.textContent == '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'You answer have to have "?"!';
		answer.textContent = '';
	} else {
		error.textContent = 'Give me a question!';
		answer.textContent = '';
	}

	ball.classList.remove('shake-animation');
};

const generatorAnswer = () => {
	const randomNumber = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Answer:</span> ${answerArr[randomNumber]}`;
};

ball.addEventListener('click', shakeBall);
