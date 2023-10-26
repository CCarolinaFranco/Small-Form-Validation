"use strict";

console.log("holis");

const form = document.querySelector('.js-form');
const btn = document.querySelector('.js-btn');
const name1 = document.querySelector('.js_inputName');
const lastName = document.querySelector('.js_inputLastname');
const email = document.querySelector('.js_inputEmail');


function validationData(e){
  e.preventDefault();
  const nameValue = name1.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;

  if (nameValue === "" && lastNameValue === "" && emailValue === ""){
    alert("Empty field"); 
  }
}


function validationRB(e){
  const man = document.getElementById('hombre');
  const women = document.getElementById('mujer');

  if(man.checked !== women.checked){ 
  }
  else{
    alert("Select either man or woman")
    e.preventDefault();
}
}


function validationTermsCond(e){
  const termCondition = document.getElementById("term")

  if(termCondition.checked){ 
  }
  else{
    alert("Accept Term and Conditions")
    e.preventDefault();
}
}


function handleClick(e){
  e.preventDefault();
  
  validationData(e);
  validationRB(e);
  validationTermsCond(e)

}

btn.addEventListener("click", handleClick);

