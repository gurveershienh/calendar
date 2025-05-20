const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let container = document.querySelector(".container");
let calender = document.querySelector(".calendar");
let display = document.querySelector(".display");

let header = document.querySelector("header");
let week = document.querySelector(".week");
let days = document.querySelector(".days");


let currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth();
let currDay = currDate.getDay();

function display_calendar () {
    let formatted_date = currDate.toLocaleString("en-US",
        {
            month: "long",
            year: "numeric"
        }
    );

    display.innerHTML = `${formatted_date}`
    const monthNumDays = new Date(currYear, currMonth + 1, 0).getDate();
    
    const monthFirstDay = new Date(currYear, currMonth, 1);
    const indexFirstDay = monthFirstDay.getDay();

    const monthLastDay = new Date(currYear, currMonth, monthNumDays);
    const indexLastDay = monthLastDay.getDay();

    //Populate 'empty' days of week before first of month
    for (let i = 1; i <= indexFirstDay; i++) {
        const div = document.createElement("div");
        div.classList.add('empty-date')
        div.innerHTML += "";
        days.appendChild(div);
    };

    for (let i = 1; i <= monthNumDays; i++) {
        let div = document.createElement("div");
        let divDate = new Date(currYear, currMonth, i); //date of each div, month/year is the same for each

        div.dataset.date = divDate.toDateString(); //creating 'date' in element dataset 
        div.classList.add("populated-date")
        div.innerHTML += i;
        days.appendChild(div);

        if (
            divDate.getFullYear() === new Date().getFullYear() &&
            divDate.getMonth() === new Date().getMonth() &&
            divDate.getDate() === new Date().getDate()
        ) {
            div.classList.add("curr-date");
        };
    };
};

function prev_month () {
    days.innerHTML = "";

    if (currMonth < 0) {
        currMonth = 11;
        currYear -= 1;
    };
    currMonth -= 1;

    currDate.setMonth(currMonth);
    display_calendar();
};

function next_month () {
    days.innerHTML = "";

    if (currMonth > 11) {
        currMonth = 0;
        currYear += 1;
    };
    currMonth += 1;

    currDate.setMonth(currMonth);
    display_calendar();
};



display_calendar();
