import getCity from './getUser-ip.js'

async function global() {
const API_KEY = 'fd185eec875c277bc16bccdb3629b6af'

const titleCity = document.querySelector('.title-city');

const city = document.createElement('p');
city.classList.add('city');

const temperature = document.createElement('p');
temperature.classList.add('temperature');

const image = document.createElement('img')
    image.classList.add('imageUser');

const test1 = async function() {
    const result = await getCity();
    console.log(result)
    return result;
}
 console.log(test1())

async function showTemperature(currentCity){
    const dataCity = await currentCity;
    console.log(dataCity)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data.main.temp);
    return data.main.temp
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


const input = document.querySelector('.input-city');
const button = document.querySelector('.btn');
let test;

button.addEventListener('click',async () => {
    test = input.value;
    city.innerText = test;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${test}&appid=${API_KEY}`);
    const data = await response.json();
    temperature.innerText =`${data.main.temp} °C `;
    console.log(data);
    image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    input.value = ''


})


}
global();