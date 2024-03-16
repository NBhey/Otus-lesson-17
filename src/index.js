import getCity from './getUser-ip'
import "./style/style.css"

const API_KEY = 'fd185eec875c277bc16bccdb3629b6af'
async function global() {


const titleCity = document.querySelector('.title-city');

const city = document.createElement('p');
city.classList.add('city');

const temperature = document.createElement('p');
temperature.classList.add('temperature');

const image = document.createElement('img')
    image.classList.add('imageUser');

const test1 = async function() {
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

showUserCity(test1()); 

async function readList() {
    const data = localStorage.getItem("list");
    if (data === null) return [];
    return JSON.parse(data);
  }
const input = document.querySelector('.input-city');
const button = document.querySelector('.btn');

function saveList(items) {
    localStorage.setItem("list", JSON.stringify(items));
  }
function drawList(el, items) {
    el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
  }
  const listEl = document.querySelector("#list");
  const items = await readList();
  drawList(listEl, items);
// button.addEventListener('click',async () => {
//     test = input.value.trim();
//     city.innerText = test;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${test}&appid=${API_KEY}`);
//     const data = await response.json();
//     temperature.innerText =`${Math.round(data.main.temp)} °C `;
//     console.log(data);
//     image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     input.value = '';
// });
button.addEventListener('click', () => {
    let test = input.value.trim();
    showUserCity(test);
    input.value = ''

      // добавляем элемент в список
      items.push(test);

      // обновляем список
      drawList(listEl, items);
  
      // сохраняем список
      saveList(items);
})
}
global();