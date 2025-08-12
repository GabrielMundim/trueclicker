const seta = document.getElementById("seta")
const kma = document.getElementById("kma")
const title = document.getElementById("Title")
const clicks = document.getElementById("clicks")
const cpcs = document.getElementById("cpc")
const menu = document.getElementById("menu")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const forth = document.getElementById("forth")
const fifthy = document.getElementById("fifthy")
const delay1 = document.getElementById("delay1")
let delay = 200
let delayvalue = 100000
let v1 = first.value
let cpc = 10000000000000
let canclick = true
let listpoint = 0
clicks.value = 0 
let aparece = true
first.value = 100
second.value = 1000
third.value = 10000
forth.value = 100000
fifthy.value = 1000000
let firstadd = 1
let secondadd = 15
let thirdadd = 200
let forthadd = 3000
let fifthyadd = 50000
let delayed = 0
delay1.value = 100000
const valuelist = {
    vindex: 0,
    values: ["10M", "1B", "Max", "Max"]
}
 let temporizador =  setInterval(() => {
    canclick = true
}, delay);
class adds {
    constructor() {
        firstadd,
        secondadd,
        thirdadd,
        forthadd,
        fifthyadd
    }
}

function Cgain(){
        if (canclick) {
        clicks.value = clicks.value + cpc
    clicks.innerHTML = clicks.value  

 }
 canclick = false
}
 
function diminui() {
    seta.style.width = '18%'
    seta.style.height = '80px'
    seta.style.top = '0px'
    seta.style.left = '0px'
if (aparece)  {
    menu.style.display = 'block'
    aparece = false
} else {
    menu.style.display = 'none'
    aparece = true
 }
}

function aumenta() {
    setTimeout(() => {
        seta.style.width = '20%';
     seta.style.height = '110px';
     seta.style.left = '0px';
     seta.style.top = '0px';
}, 200);
    }
    function addc1 () {
        if (clicks.value >= first.value) {
        cpc = cpc + firstadd
        clicks.value = clicks.value - first.value
        first.value = first.value * 1.5
        first.value = Math.floor(first.value)
        first.innerHTML = `${first.value}: + ${firstadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    function addc2 () {
        if (clicks.value >= second.value) {
        cpc = cpc + secondadd
        clicks.value = clicks.value - second.value
        second.value = second.value * 1.5
        second.value = Math.floor(second.value)
        second.innerHTML = `${second.value}: + ${secondadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    function addc3 () {
        if (clicks.value >= third.value) {
        cpc = cpc + thirdadd
        clicks.value = clicks.value - third.value
        third.value = third.value * 1.5
        third.value = Math.floor(third.value)
        third.innerHTML = `${third.value}: + ${thirdadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    function addc4 () {
        if (clicks.value >= forth.value) {
        cpc = cpc + forthadd
        clicks.value = clicks.value - forth.value
        forth.value = forth.value * 1.5
        forth.value = Math.floor(forth.value)
        forth.innerHTML = `${forth.value}: + ${forthadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
     function addc5 () {
        if (clicks.value >= fifthy.value) {
        cpc = cpc + fifthyadd
        clicks.value = clicks.value - fifthy.value
        fifthy.value = fifthy.value * 1.5
        fifthy.value = Math.floor(fifthy.value)
        fifthy.innerHTML = `${fifthy.value}: + ${fifthyadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
  function delay1f () { 
      if (delayed >= 3) {
  delay1.style.backgroundColor = "gray";
  window.alert("Your reached the max upgrade");
} else if (clicks.value >= delay1.value) {
  delay = delay - 50;
  delay1.value = delay1.value * 100;
  delayed = delayed + 1;
  listpoint = listpoint + 1;
  console.log(delay);
  setTimeout(() => {
    clearInterval(temporizador);
    temporizador = setInterval(() => {
        canclick = true;
    }, delay);
}, 3000);
} else {
  window.alert("You do not have clicks enougth little boy");
}
         delay1.innerHTML = `${valuelist.values[valuelist.vindex]}: ${delay} Milisseconds`
    valuelist.vindex = (valuelist.vindex * 0 + listpoint) % valuelist.values.length
    }
    
kma.addEventListener("pointerdown", Cgain)
seta.addEventListener("pointerdown", diminui)
seta.addEventListener("pointerup", aumenta)
first.addEventListener("pointerdown", addc1)
second.addEventListener("pointerdown", addc2)
third.addEventListener("pointerdown", addc3)
forth.addEventListener("pointerdown", addc4)
fifthy.addEventListener("pointerdown", addc5)
delay1.addEventListener("pointerdown", delay1f)
