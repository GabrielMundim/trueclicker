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
const aclicker1 = document.getElementById("aclicker1")
const aclicker3 = document.getElementById("aclicker3")
const clicking = document.getElementById("acbutton")
const aclicker2 = document.getElementById("aclicker2") 
const rebirth = document.getElementById("rebirth")
const rmenu = document.getElementById("rmenu")
const rbutton = document.getElementById("rbutton")
const vrebirth = document.getElementById("vrebirth")
const vrtext = document.getElementById("vrtext")
const audio = new Audio("gemido-whatsapp.mp3")
const music = new Audio("Gloria Gaynor i will survive Lyrics.mp3")
let delay = 200
let delayvalue = 100000
let v1 = 100
let v2 = 1000
let v3 = 10000
let v4 = 100000
let v5 = 1000000
let initialcpc = 1
let cpc = 1
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
let clickingc = false
let actvc = false
let actvc2 = false
let actvc3 = false
let tempo; 
let updt1 = false
let updt2 = false
let rmopen = false
let speed = 1000
vrebirth.value = 1000000
delay1.value = 100000
const valuelist = {
    vindex: 0,
    values: ["100K","10M", "1B", "Max",]
}
 let temporizador =  setInterval(() => {
    canclick = true
}, delay);

function Cgain(){
        if (canclick) {
        clicks.value = clicks.value + cpc
        clicks.innerHTML = clicks.value  
        audio.play()
        audio.volume = 0.1
 }
 canclick = false
}
setInterval(() => {
    clicks.innerHTML = clicks.value
}, 50);
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
        first.value = Math.ceil(first.value)
        first.innerHTML = `${first.value}: + ${firstadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    setInterval(() => {
        if (clicks.value < first.value) {
            first.style.backgroundColor = "gray"
        }
        else {
           first.style.backgroundColor = "rgb(189, 19, 132)" 
        }
    }, 50);
    function addc2 () {
        if (clicks.value >= second.value) {
        cpc = cpc + secondadd
        clicks.value = clicks.value - second.value
        second.value = second.value * 1.5
        second.value = Math.ceil(second.value)
        second.innerHTML = `${second.value}: + ${secondadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    setInterval(() => {
        if (clicks.value < second.value) {
            second.style.backgroundColor = "gray"
        }
        else {
           second.style.backgroundColor = "rgb(189, 19, 132)" 
        }
    }, 50);
    function addc3 () {
        if (clicks.value >= third.value) {
        cpc = cpc + thirdadd
        clicks.value = clicks.value - third.value
        third.value = third.value * 1.5
        third.value = Math.ceil(third.value)
        third.innerHTML = `${third.value}: + ${thirdadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    setInterval(() => {
        if (clicks.value < third.value) {
            third.style.backgroundColor = "gray"
        }
        else {
           third.style.backgroundColor = "rgb(189, 19, 132)" 
        }
    }, 50);
    function addc4 () {
        if (clicks.value >= forth.value) {
        cpc = cpc + forthadd
        clicks.value = clicks.value - forth.value
        forth.value = forth.value * 1.5
        forth.value = Math.ceil(forth.value)
        forth.innerHTML = `${forth.value}: + ${forthadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    setInterval(() => {
        if (clicks.value < forth.value) {
            forth.style.backgroundColor = "gray"
        }
        else {
           forth.style.backgroundColor = "rgb(189, 19, 132)" 
        }
    }, 50);
     function addc5 () {
        if (clicks.value >= fifthy.value) {
        cpc = cpc + fifthyadd
        clicks.value = clicks.value - fifthy.value
        fifthy.value = fifthy.value * 1.5
        fifthy.value = Math.ceil(fifthy.value)
        fifthy.innerHTML = `${fifthy.value}: + ${fifthyadd} Clicks `
        } else {
            window.alert("You do not have clicks enougth little boy")
        }
    }
    setInterval(() => {
        if (clicks.value < fifthy.value) {
            fifthy.style.backgroundColor = "gray"
        }
        else {
           fifthy.style.backgroundColor = "rgb(189, 19, 132)" 
        }
    }, 50);
    function clicka (){
        if (clickingc === false) {
             tempo = setInterval(() => {
                clicks.value = clicks.value + cpc
                audio.volume = 0.1
                audio.play()
            }, speed);
            clicking.style.backgroundColor = "green"
             window.alert("Auto Clicker was activated")
             clickingc = true
        }
        else if (clickingc === true) {
            window.alert("Auto Cliker was disabled")
            clearInterval(tempo)
            clickingc = false
            clicking.style.backgroundColor = "red"
        }
    }
    function activateacb() {
        if (clicks.value < 1000000) {
            window.alert("You do not have clicks enougth little boy")
        }
        else if (actvc === true) {
            aclicker1.style.backgroundColor = "gray";
            window.alert("You've reached the max upgrade");
        }
        else if (clicks.value >= 1000000) {
            clicking.style.display = 'block'
            actvc = true
            updt1 = true
            aclicker1.innerHTML = "Max: Fat AutoClicker"
        }
            }
    function changespeed () {
         if (clicks.value < 1000000000) {
            window.alert("You do not have clicks enougth little boy")
        }
        else if (updt1 === false) {
            window.alert("You have to buy the previous upgrade first")
        }
        else if (actvc2 === true) {
            aclicker2.style.backgroundColor = "gray";
            window.alert("You've reached the max upgrade");
        }
        else if (clicks.value >= 1000000000) {
            speed = 200
            clearInterval(tempo)
            actvc2 = true
            window.alert("The auto Clicker delay now is 200ms")
            updt2 = true
            aclicker2.innerHTML = "Max: Med AutoClicker"
        }
    } 
    function changespeed2 () {
         if (clicks.value < 1000000000000) {
            window.alert("You do not have clicks enougth little boy")
        }
        else if (updt2 === false) {
            window.alert("You have to buy the previous upgrade first")
        }
        else if (actvc3 === true) {
            aclicker3.style.backgroundColor = "gray";
            window.alert("You've reached the max upgrade");
        }
        else if (clicks.value >= 1000000000000) {
            speed = 50
            clearInterval(tempo)
            actvc3 = true
            window.alert("The auto Clicker delay now is 50ms")
            aclicker3.innerHTML = "Max: Fast AutoClicker"
        }
    } 
            setInterval(() => {
                if (actvc === true) {
            aclicker1.style.backgroundColor = "gray";}
            }, 50);
             setInterval(() => {
                if (actvc2 === true) {
            aclicker2.style.backgroundColor = "gray";}
            }, 50);
            setInterval(() => {
                if (actvc3 === true) {
            aclicker3.style.backgroundColor = "gray";}
            }, 50);

  function delay1f () { 
      if (delayed >= 3) {
  delay1.style.backgroundColor = "gray";
  window.alert("You've reached the max upgrade");
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
    setInterval(() => {
         if (delayed >= 3) {
  delay1.style.backgroundColor = "gray";}
    }, 50);
    function openrm () {
        if (rmopen === false) {
            rmenu.style.display = "block"
            rmopen = true
        }
        else if (rmopen === true) {
            rmenu.style.display = "none"
            rmopen = false
        }
    }
    function rebirthdo () {
        if (clicks.value < vrebirth.value) {
            window.alert("You do not have clicks enougth little boy")
    }
        else if (clicks.value >= vrebirth.value) {
            firstadd = firstadd * 1.5
            secondadd = secondadd * 1.5
            thirdadd = thirdadd * 1.5
            forthadd = forthadd * 1.5
            fifthyadd = fifthyadd * 1.5
            Math.ceil(firstadd)
            Math.ceil(secondadd)
            Math.ceil(thirdadd)
            Math.ceil(forthadd)
            Math.ceil(fifthyadd)
            v1 = Math.ceil(v1 * 1.5)
            v2 = Math.ceil(v2 * 1.5)
            v3 = Math.ceil(v3 * 1.5)
            v4 = Math.ceil(v4 * 1.5)
            v5 = Math.ceil(v5 * 1.5)
            initialcpc = initialcpc * 1.5
            first.value = v1
            second.value = v2
            third.value = v3
            forth.value = v4
            fifthy.value = v5
            clicks.value = 0
            cpc = initialcpc
            Math.ceil(cpc)
            vrebirth.value = vrebirth.value * 2
            updt1 = false
            updt2 = false
            actvc = false
            actvc2 = false
            actvc3 = false
            clickingc = false
            delay = 200
            speed = 1000
            clearInterval(tempo)
            clearInterval(temporizador)
            temporizador = setInterval(() => {
                canclick = true
            }, delay);
            delayed = 0
            clicking.style.display = 'none'
            clicking.style.backgroundColor = "red"
            aclicker1.innerHTML = "1M: Fat AutoClicker"
            aclicker2.innerHTML = "1B: Med AutoClicker"
            aclicker3.innerHTML = "1T: Fast AutoClicker"
            delay1.style.backgroundColor = "rgb(189, 19, 132)"
            aclicker1.style.backgroundColor = "rgb(189, 19, 132)"
            aclicker2.style.backgroundColor = "rgb(189, 19, 132)"
            aclicker3.style.backgroundColor = "rgb(189, 19, 132)"
            first.innerHTML = `${first.value}: + ${Math.ceil(firstadd)} Clicks `
            second.innerHTML = `${second.value}: + ${Math.ceil(secondadd)} Clicks `
            third.innerHTML = `${third.value}: + ${Math.ceil(thirdadd)} Clicks ` 
            forth.innerHTML = `${forth.value}: + ${Math.ceil(forthadd)} Clicks `
            fifthy.innerHTML = `${fifthy.value}: + ${Math.ceil(fifthyadd)} Clicks `
            valuelist.vindex = 0
            listpoint = 0
            delay1.value = 100000
            delay1.innerHTML = `${valuelist.values[valuelist.vindex]}: ${delay} Milisseconds`
            window.alert("You have rebirthed, your clicks and upgrades were reseted, but you got stronger little boy")
            rmenu.style.display = "none"
  }
}
            delay1.innerHTML = `${valuelist.values[valuelist.vindex]}: ${delay} Milisseconds`
    setInterval(() => {
        if (clicks.value < vrebirth.value) {
            rbutton.style.backgroundColor = "gray"}
        else if (clicks.value >= vrebirth.value) {
            rbutton.style.backgroundColor = "rgba(189, 19, 132, 0.12)" }
        }, 50)
    setInterval(() => {
            vrtext.innerHTML = `${clicks.value}/${vrebirth.value}`
        }, 50);
kma.addEventListener("pointerdown", Cgain)
seta.addEventListener("pointerdown", diminui)
seta.addEventListener("pointerup", aumenta)
first.addEventListener("pointerdown", addc1)
second.addEventListener("pointerdown", addc2)
third.addEventListener("pointerdown", addc3)
forth.addEventListener("pointerdown", addc4)
fifthy.addEventListener("pointerdown", addc5)
delay1.addEventListener("pointerdown", delay1f)
aclicker1.addEventListener("pointerdown", activateacb)
clicking.addEventListener("pointerdown", clicka)
aclicker2.addEventListener("pointerdown", changespeed)
aclicker3.addEventListener("pointerdown", changespeed2)
rebirth.addEventListener("pointerdown", openrm)
rbutton.addEventListener("pointerdown", rebirthdo)
setTimeout(() => {
  music.play()
    music.volume = 0.5  
}, 1);
setInterval(() => {
    music.play()
    music.volume = 0.5
}, 288000);