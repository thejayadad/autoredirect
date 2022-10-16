

let count = document.getElementById("count");
let counter = 1;
setInterval(() => {
    count.innerText = counter;
    counter++

    if(counter > 5) location.replace("https://espn.com")
}, 1000)