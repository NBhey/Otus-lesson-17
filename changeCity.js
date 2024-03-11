const getUserData = require('./getUserData')
// import {city } from './getUserData'

 async function changeCity() {

    // const getUserData = require('./getUserData')
    const input = document.querySelector('.input-city');
    console.log(input)
    const button = document.querySelector('.btn');
    console.log(button)
    function clickChangeCity(){
        let newUserCity = document.querySelector('.cityUser')
        newUserCity.innerText = input.value;
        // getUserData(newUserCity)
        console.log(newUserCity)
    }
    button.addEventListener('click', clickChangeCity);
}


