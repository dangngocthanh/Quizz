let check1= 0;
let check2= 0;
let check3= 0;
let check4= 0;
let check5= 0;
function p1() {
    console.log(document.getElementById("p1").src)
    if (document.getElementById("p1").src === "http://localhost:63342/Quizz-game/p1-1.jpeg") {
        document.getElementById("p1").src = "http://localhost:63342/Quizz-game/p2-1.jpeg"; check1=1
    } else if (document.getElementById("p1").src === "http://localhost:63342/Quizz-game/p2-1.jpeg") {
        document.getElementById("p1").src = "http://localhost:63342/Quizz-game/p4-1.jpeg"; check1=2
    } else {
        document.getElementById("p1").src = "http://localhost:63342/Quizz-game/p1-1.jpeg"; check1=3
    }
    ktra()
}

function p2() {
    if (document.getElementById("p2").src === "http://localhost:63342/Quizz-game/p1-2.jpeg") {
        document.getElementById("p2").src = "http://localhost:63342/Quizz-game/p2-2.jpeg"; check2=1
    } else if (document.getElementById("p2").src === "http://localhost:63342/Quizz-game/p2-2.jpeg") {
        document.getElementById("p2").src = "http://localhost:63342/Quizz-game/p4-2.jpeg"; check2=2
    } else {
        document.getElementById("p2").src = "http://localhost:63342/Quizz-game/p1-2.jpeg"; check2=3
    }
    ktra()
}

function p3() {
    console.log(document.getElementById("p3").src)
    if (document.getElementById("p3").src === "http://localhost:63342/Quizz-game/p1-3.jpeg") {
        document.getElementById("p3").src = "http://localhost:63342/Quizz-game/p2-3 (2).jpeg"; check3=1
    } else if (document.getElementById("p3").src === "http://localhost:63342/Quizz-game/p2-3%20(2).jpeg") {
        document.getElementById("p3").src = "http://localhost:63342/Quizz-game/p4-3.jpeg"; check3=2
    } else {
        document.getElementById("p3").src = "http://localhost:63342/Quizz-game/p1-3.jpeg"; check3=3
    }
    ktra()
}

function p4() {
    if (document.getElementById("p4").src === "http://localhost:63342/Quizz-game/p1-4.jpeg") {
        document.getElementById("p4").src = "http://localhost:63342/Quizz-game/p2-4.jpeg"; check4=1
    } else if (document.getElementById("p4").src === "http://localhost:63342/Quizz-game/p2-4.jpeg") {
        document.getElementById("p4").src = "http://localhost:63342/Quizz-game/p4-4.jpeg"; check4=2
    } else {
        document.getElementById("p4").src = "http://localhost:63342/Quizz-game/p1-4.jpeg"; check4=3
    }
    ktra ()
}

function p5() {
    if (document.getElementById("p5").src === "http://localhost:63342/Quizz-game/p1-5.jpeg") {
        document.getElementById("p5").src = "http://localhost:63342/Quizz-game/p2-5.jpeg"; check5 = 1
    } else if (document.getElementById("p5").src === "http://localhost:63342/Quizz-game/p2-5.jpeg") {
        document.getElementById("p5").src = "http://localhost:63342/Quizz-game/p4-5.jpeg"; check5 = 2
    } else {
        document.getElementById("p5").src = "http://localhost:63342/Quizz-game/p1-5.jpeg"; check5 = 3
    }
    ktra()
}


function ktra() {
    if (check1===check2 && check2===check3 && check3===check4 && check4===check5){
        let css=document.getElementsByTagName("div");
        css.style.height=" 108px";
        css.style.width=" 864px";
        css.style.border="5px solid";
        css.style.boxShadow="6px 6px 6px Red";
        css.style.padding="1px";
    }
}