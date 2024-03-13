// const getUserData = require('./getUserData')
import {city } from './getUserData.js'

  function changeCity() {

    // const getUserData = require('./getUserData')
    const input = document.querySelector('.input-city');
    console.log(input)
    const button = document.querySelector('.btn');
    console.log(button)
    function clickChangeCity(){
        let newUserCity = document.querySelector('.cityUser')
        newUserCity.innerText = input.value;
        city(newUserCity)
        console.log(newUserCity)
    }
    button.addEventListener('click', clickChangeCity);
}
changeCity()

