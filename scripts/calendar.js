// calendar
const date = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let day = days[date.getDay()];
let month = months[date.getMonth()];
let dateToday = date.getDate();
let year = date.getFullYear();
if(dateToday < 10){
    dateToday = '0' + dateToday;
}
// console.log(day + " " + month + " " + dateToday + " " + year);
document.getElementById('calendar-div').innerHTML = `
    <p>${day} ,</p>
    <p class="font-semibold">${month} ${dateToday} ${year}</p>
`