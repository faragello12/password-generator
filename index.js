const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btn = document.getElementById("btn")
let reset = document.getElementById('reset')
let firstPassword = document.getElementById("first-el")
let secondPassword = document.getElementById("second-el")


btn.addEventListener("click", function(){
    firstPassword.textContent = " "
    secondPassword.textContent = " "
    for (let i= 0 ; i < 15 ; i++){
    let randomElOne = Math.floor(Math.random() * characters.length)
    let randomElTwo = Math.floor(Math.random() * characters.length)
    firstPassword.textContent += characters[randomElOne]
    secondPassword.textContent += characters[randomElTwo]
    }
})
reset.addEventListener("click", function(){
    firstPassword.textContent = " "
    secondPassword.textContent = " "
})
