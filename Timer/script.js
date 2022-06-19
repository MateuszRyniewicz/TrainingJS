const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');

const eventSpan = document.querySelector('.event');
let usersTime;

//https://cdn.pixabay.com/photo/2022/05/17/15/49/flower-7203048_960_720.jpg

const setTime = () => {
	const curretTime = new Date();
	const resultTime = usersTime - curretTime;

	const days = Math.floor(resultTime / 1000 / 60 / 60 / 24);
	const hours = Math.floor(resultTime / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(resultTime / 1000 / 60) % 60;
	const seconds = Math.floor(resultTime / 1000) % 60;
	console.log(days);
	console.log(hours);
	console.log(minutes);
	console.log(seconds);

	minutesCount.textContent = minutes;
	hoursCount.textContent = hours;
	daysCount.textContent = days;
	secondsCount.textContent = seconds;
};

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	imageSection.style.backgroundImage = `url('${eventImage.value}')`;

	setTime();
};

saveBtn.addEventListener('click', appUpdate);
settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active');
});

appUpdate();
setInterval(setTime, 1000);
