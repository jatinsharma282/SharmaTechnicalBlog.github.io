// Reply button js
// show and hide the replies 
const reply = (response) => {
    var comments = document.getElementById(response);
    if (comments.className == "replies") {
        comments.className = "jatin_show";
    } else if (comments.className == "jatin_show") {
        comments.className = "replies";
    }
}
// Whenever someone click on any reply btn that means whenever someone is calling any reply() function then the data passed in that reply() function through the id of that div, then that data can be accepted through response attribute. In response attribute we get the data related to the div on which onclick event is fired and by using var comments we can access that data and performs differnt operation.

// Like button js
// Step1: To get the id of like_btn
const x = document.getElementById("like_btn");
const singleClick = () => {
    x.style.fontWeight = 'bold';
    x.style.background = '#bbe1fa';
    x.style.color = '#1b262c';
    x.innerHTML = '✔ Liked'
}
const doubleClick = () => {
    x.style.fontWeight = 'normal';
    x.style.background = '#3282b8';
    x.style.color = '#fff';
    x.innerHTML = 'Like'
}
// Step2: To call the func on singlecclick and then on doubleclick
var clickCount = 0;
x.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false);


// Step1: To get the id of like_btn2
const y = document.getElementById("like_btn2")
const singleClick2 = () => {
    y.style.fontWeight = 'bold';
    y.style.background = '#bbe1fa';
    y.style.color = '#1b262c';
    y.innerHTML = '✔ Liked'
}
const doubleClick2 = () => {
    y.style.fontWeight = 'normal';
    y.style.background = '#3282b8';
    y.style.color = '#fff';
    y.innerHTML = 'Like'
}
// Step2: To call the func on singlecclick and then on doubleclick
var clickCount = 0;
y.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick2();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick2();
    }
}, false);

// Step1: To get the id of like_btn3
const z = document.getElementById("like_btn3");
const singleClick3 = () => {
    z.style.fontWeight = 'bold';
    z.style.background = '#bbe1fa';
    z.style.color = '#1b262c';
    z.innerHTML = '✔ Liked'
}
const doubleClick3 = () => {
    z.style.fontWeight = 'normal';
    z.style.background = '#3282b8';
    z.style.color = '#fff';
    z.innerHTML = 'Like'
}
// Step2: To call the func on singlecclick and then on doubleclick
var clickCount = 0;
z.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick3();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick3();
    }
}, false);
