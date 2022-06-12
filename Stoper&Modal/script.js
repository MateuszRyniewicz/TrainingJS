const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const infoBtn = document.querySelector('.info');
const stopWatch = document.querySelector('.stopwatch');
const timeList = document.querySelector('.time-list');
const time = document.querySelector('.time');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let timeCounter;
let sec = 0;
let min = 0;

let timesArr = [];
const handleStart = () => {
	clearInterval(timeCounter);

	timeCounter = setInterval(() => {
		if (sec < 9) {
			sec++;
			stopWatch.textContent = `${min}:0${sec}`;
		} else if (sec >= 9 && sec <= 59) {
			sec++;
			stopWatch.textContent = `${min}:${sec}`;
		} else {
			min++;
			sec = 0;
			stopWatch.textContent = `${min}:00`;
		}
	}, 1000);
};

const handleStop = () => {
	time.innerHTML = `Last time: ${stopWatch.textContent}`;

	if (stopWatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopWatch.textContent);
		console.log(timesArr);
	}
	clearstafff();
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	timesArr = [];
	clearstafff();
};

const pauseCounter = () => {
	clearInterval(timeCounter);
};

const clearstafff = () => {
	clearInterval(timeCounter);
	stopWatch.textContent = '0:00';
	timeList.textContent = '';
	sec = 0;
	min = 0;
};

const showHistory = () => {
	timeList.textContent = '';
	let num = 1;
	timesArr.forEach((time) => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Nr ${num}: <span>${time}</span`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
	} else {
		modalShadow.style.display = 'none';
	}

	modalShadow.classList.toggle('modal-animation');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', pauseCounter);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', (e) =>
	e.target === modalShadow ? showModal() : false
);
