const days = document.getElementById("one");
const hours = document.getElementById("two");
const minutes = document.getElementById("three");
const seconds = document.getElementById("four");
const form = document.getElementById("myform");
change = document.getElementById("changetext");
targetDate = new Date("December 16, 2025 09:00:00").getTime();

form.addEventListener("submit", function(event){
    event.preventDefault();
    const dateInput = document.getElementById("date").value;
    const name = document.getElementById("name").value;
    targetDate = new Date(dateInput).getTime();
    change.innerText = name;
});
function timer(){
    const now = new Date().getTime();
    const timeremaining = targetDate - now;
    
    const d = Math.floor(timeremaining / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeremaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeremaining % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeremaining % (1000 * 60)) / 1000);
    
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
setInterval(timer, 1000);