function login(){

let correctUser = "Socks_the_Cat";
let correctPass = "Siamese2022";

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === correctUser && pass === correctPass){

    localStorage.setItem("role","admin");
    window.location.href = "flag.html";

}else{
    document.getElementById("msg").innerHTML = "Invalid Login";
}

}