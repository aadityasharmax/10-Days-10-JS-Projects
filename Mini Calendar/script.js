const Mydate = new Date();
const date = Mydate.getDate();
const day = Mydate.toLocaleDateString('en-US', { weekday: 'long' });
const month = Mydate.toLocaleDateString('en-US', { month: 'long' });
const year = Mydate.getFullYear();


document.querySelector('.date').innerHTML = date;
document.querySelector('.day').innerHTML = day.toLocaleString();
document.querySelector('.month').innerHTML =month;
document.querySelector('.year').innerHTML = year;

