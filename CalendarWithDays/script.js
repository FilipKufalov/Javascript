let today = new Date();
let CalendarYear = today.getFullYear();

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

MonthString = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

console.log(`Calendar for ${CalendarYear}`);

for (let i = 0; i < 12; i++) {
    let Months = getDaysInMonth(today.getFullYear, i);
    console.log(`${MonthString[i]} ${Months}`);
}
