function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "lightblue";
    document.getElementById("paragraph").style.color = "navy";
    document.getElementById("paragraph").style.padding = "20px";
    document.getElementById("paragraph").style.textAlign = "center";
    randomnum();
    userNumber();
}

function randomnum(){
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "lightpink";
    x.style.color = "purple";
    x.style.padding = "20px";
    x.style.textAlign = "center";
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.backgroundColor = "lightyellow";
    y.style.color = "orange";
    y.style.padding = "20px";
    y.style.textAlign = "center";
}
