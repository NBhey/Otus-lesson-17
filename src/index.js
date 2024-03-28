import getCity from './getUserIp'
import saveList from './localStorage'
import { getItem } from './localStorage'
import drawList from './drawList'
import { countCity } from './countCity'
import "./style/style.css"

const API_KEY = 'fd185eec875c277bc16bccdb3629b6af'

const titleCity = document.querySelector('.title-city');

const city = document.createElement('p');
city.classList.add('city');

const temperature = document.createElement('p');
temperature.classList.add('temperature');

const image = document.createElement('img')
    image.classList.add('imageUser');

async function global() {
const userCity = async function() {
    const result = await getCity();
    return result;
}

async function showTemperature(currentCity){
    const dataCity = await currentCity;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=${API_KEY}`);
    const data = await response.json();
    return Math.round(data.main.temp)
}
async function imageGet(currentCity){
    const dataCity = await currentCity;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=${API_KEY}`);
    const data = await response.json();
    return data.weather[0].icon;
  }
async function showUserCity(currentCity) {
    city.innerText = await currentCity;
    temperature.innerText =` ${await showTemperature(currentCity)} °C `;
    image.src = `http://openweathermap.org/img/wn/${await imageGet(currentCity)}@2x.png`;
    return titleCity.append(city,temperature,image)
}

showUserCity(userCity()); 



const input = document.querySelector('.input-city');
const button = document.querySelector('.btn');
const listEl = document.querySelector("#list");

const readList = await getItem();

drawList(listEl,readList);
console.log(listEl.children.length);
button.addEventListener('click', () => {
    let value = input.value.trim();
    if (value === '') {alert('Введите значение в поле')}
    showUserCity(value);
     
    readList.push(value);
    drawList(listEl,readList);
    saveList(readList);
    countCity(listEl);
    input.value = ''
})
}
global();