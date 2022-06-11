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
	clearInterval(timeCounter);
	stopWatch.textContent = '0:00';
	timeList.textContent = '';
	sec = 0;
	min = 0;
};

const pauseCounter = () => {
	clearInterval(timeCounter);
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', pauseCounter);
stopBtn.addEventListener('click', handleStop);
