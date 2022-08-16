const months = [
 'Jan',
 'Feb',
 'Mar',
 'Apr',
 'May',
 'Jun',
 'Jul',
 'Aug',
 'Sept',
 'Oct',
 'Nov',
 'Dec'
  ];

const weekday = [
  'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday',
  ];
  
const valid = document.querySelector('.valid');

// this "tem" area was used to target the actual date when someone clicks the link to our project and increase the day interval by +2
const temDate = new Date();
const temYear = temDate.getFullYear();
const temMonth = temDate.getMonth();
const temDay = temDate.getDate();
 // ____________________________________
 console.log(temDay);
   
const validDate = new Date(temYear,temMonth,temDay + 2,23,59,0);
 
const day = weekday[validDate.getDay()];
const date =  validDate.getDate();
const month = months[validDate.getMonth()];
const year = validDate.getFullYear();
const hour = validDate.getHours();
const minute = validDate.getMinutes();
 
valid.textContent = `This discount is valid until ${day}, ${date}th ${month} ${year} at ${hour}:${minute}pm`;

const duration = document.querySelectorAll('.duration h3');

const validTime = validDate.getTime();

function timeLeft() {
const currentTime = new Date().getTime();
let diffTime = validTime - currentTime;
 
// conversion to milliseconds since our getTime() unit is in milliseconds 

// 1s = 1000ms
// 1m = 60s
// 1hr = 60mins
// 1 day = 24hrs

const oneDay = 24 * 60 * 60 * 1000;//ms
const oneHour = 60 * 60 * 1000;//ms
const oneMinute = 60 * 1000;//ms

// calculating the time left

const dayLeft = Math.floor(diffTime/oneDay);

const hourLeft = Math.floor((diffTime % oneDay) /oneHour);

const minuteLeft = Math.floor((diffTime % oneHour)/oneMinute);

const secsLeft = Math.floor((diffTime % oneMinute)/1000);


// setting the array for my time duration

const durLeft = [dayLeft,hourLeft,minuteLeft,secsLeft];

function adjustDigits(dur) {
  if (dur < 10) {
    return dur = `0${dur}`
  } else {
    return dur ; 
  }
}

duration.forEach((dur,index) => {
 dur.textContent = adjustDigits(durLeft[index]);
 
 const countdown = document.querySelector('.countdown');
 
 if (diffTime < 0) {
   clearInterval(timeElapse);
 countdown.innerHTML = `<section class='text'>discount offer for this product has expired 
  <p>Stay alert always for our next discounts coming soon...</p>
 </section>`;
 }
});
 
}

let timeElapse = setInterval(timeLeft,1000); 
timeLeft();
