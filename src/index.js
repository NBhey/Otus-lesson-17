import getCity from "./getUserIp";
import saveList from "./localStorage";
import { getItem } from "./localStorage";
import { countCity } from "./countCity";
import "./style/style.css";

const API_KEY = "fd185eec875c277bc16bccdb3629b6af";

const titleCity = document.querySelector(".title-city");

const city = document.createElement("p");
city.classList.add("city");

const temperature = document.createElement("p");
temperature.classList.add("temperature");

const image = document.createElement("img");
image.classList.add("imageUser");

async function global() {
  const userCity = async function () {
    const result = await getCity();
    return result.city;
  };
  async function getCoordinate(){
    const data = await getCity();
    const coorArr = [];
    coorArr.push(data.longitude,data.latitude);
    return coorArr;
  }
  async function showTemperature(currentCity) {
    const dataCity = await currentCity;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=${API_KEY}`
    );
    const data = await response.json();
    return Math.round(data.main.temp);
  }
  async function imageGet(currentCity) {
    const dataCity = await currentCity;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data.weather[0].icon;
  }
  async function showUserCity(currentCity) {
    city.innerText = await currentCity;
    temperature.innerText = ` ${await showTemperature(currentCity)} °C `;
    image.src = `http://openweathermap.org/img/wn/${await imageGet(
      currentCity
    )}@2x.png`;
    return titleCity.append(city, temperature, image);
  }
  
  showUserCity(userCity());

  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: await getCoordinate(),
        zoom: 10,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
  }

  function drawList(el, input) {
    el.innerHTML = input.map((el) => `<p>${el}</p>`).join("");
    console.log(el);
    console.log(input);
    for (let i = 0; i < el.children.length; i++) {
      console.log(el.children[i].textContent);
      el.children[i].addEventListener("click", (e) => {
        e.preventDefault();
        showUserCity(el.children[i].textContent);
      });
    }
    console.log(el);
    console.log(input);
    if (input.length === 5) {
      input.splice(0, 1);
    }
  }

  const input = document.querySelector(".input-city");
  const button = document.querySelector(".btn");
  const listEl = document.querySelector("#list");

  const readList = await getItem();

  drawList(listEl, readList);
  button.addEventListener("click", () => {
    let value = input.value.trim();
    if (value === "") {
      alert("Введите значение в поле");
    }
    showUserCity(value);
    readList.push(value);
    drawList(listEl, readList);
    saveList(readList);
    countCity(listEl);
    input.value = "";
  });
}
global();

// С лекции подсказка

// el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;

// const res = [];

// const ol = document.createElement("ol");
// for (let i = 0; i < items.length; i++) {
//   const li = document.createElement("li");
//   li.addEventListener("click", () => {
//     console.log("click", items[i]);
//   });
//   li.append(items[i]);
//   ol.append(li);
// }
// el.innerHTML = ""
// el.append(ol);
