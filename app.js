let sana = document.getElementById("sana");
let time = document.getElementById("time");
let kun = document.getElementById("kun");

setInterval(() => {
    let vaqt = new Date();

    sana.innerText =  + vaqt.getHours() + ":";
    time.innerText =  + vaqt.getMinutes() + ":" ;
    kun.innerText = + vaqt.getSeconds() ;
})
