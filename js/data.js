const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Расчеты
const currentYear = new Date().getFullYear(); // 2020
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);


function updateData() {
  const currentTime = new Date();
  const difference = nextYear - currentTime;

  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);  	// Перевод в дни				
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24; 	// Всего часов 
  const minutesLeft = Math.floor(difference/ 1000 / 60) % 60;	  	  // Всего минут 					
  const secondsLeft = Math.floor(difference / 1000) % 60;         	// Всего секунд

	// С помощью тернарного оператора записываем значения и выводим
  // Также, обратите внимание, если число однозначное, то добавляется "0"
	days.innerText = daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

// Каждую секунду идет запуск функции
setInterval(updateData, 1000); 

// Подключение плагина
AOS.init();