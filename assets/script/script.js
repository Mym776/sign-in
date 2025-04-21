
const body= document.querySelector("body")
const right= document.querySelector(".right")
const left= document.querySelector(".left")
const title =document.querySelector(".title")
const field = document.querySelector("#f")
const fl = document.querySelector("#leg")
const paswd = document.querySelector("#p")
const cpasswd = document.querySelector("#cp")
const  button = document.querySelectorAll(".buttons button")
const  brand= document.querySelector(".brand-name")
const submit = document.querySelector("#submit")

let x =0;
let y=0;
left.addEventListener("mouseenter",(e)=>{
    let s =20;
    if(x===100){
        x=0;
      
    }else{
        x+=20;
    }
    if(y===100){
        y=0;
    }else{
        y+=20;
    }
 
    
    e.target.style.backgroundPosition = x+ "%"+y+ "%";
  
})
title.addEventListener("mouseenter",()=>{
    title.style.color = " rgb(220, 103, 50)"
})

title.addEventListener("mouseleave",()=>{
    title.style.color = " white"
})

field.addEventListener("mouseenter",()=>{
    field.style.borderColor = " rgb(220, 103, 50)"
})

field.addEventListener("mouseleave",()=>{
    field.style.borderColor = " white"
    
})
function buttonEvents(b){
    
b.addEventListener("mouseenter",()=>{
    b.style.backgroundColor = " rgb(220, 103, 50)"
    b.style.color = "white"
})
b.addEventListener("mouseleave",()=>{
    b.style.backgroundColor = " white"
    b.style.color = " black"
})
console.log("hello")
}

button.forEach( (b)=>{
    b.addEventListener("mouseenter",()=>{
        b.style.backgroundColor = " rgb(220, 103, 50)"
        b.style.color = "white"
    })
    b.addEventListener("mouseleave",()=>{
        b.style.backgroundColor = " white"
        b.style.color = " black"
    })}
) 

paswd.addEventListener("invalid", ()=>{
    paswd.style.border = "solid red 1px"
})

cpasswd.addEventListener("blur", ()=>{
   validate()
})
function validate(){

    if(paswd.value!==cpasswd.value){
        cpasswd.setAttribute("isvalid","false")
        paswd.style.border = " solid red 1px"
        alert("incorrect passw")
    }
    return false;
}

brand.addEventListener("mouseenter", ()=>{
    brand.style.transition = "text-decoration-color 2s "
    brand.style.textDecorationColor = "chocolate"

})
brand.addEventListener("click", ()=>{
    brand.style.transition = "text-decoration-color 2s "
    brand.style.textDecorationColor = "chocolate"

})

brand.addEventListener("mouseleave", ()=>{
    brand.style.transition = "text-decoration-color 2s "
    brand.style.textDecorationColor = "white"

})