async function city(userCity) {
    const paragraphe = document.querySelector('div');
    userCity = document.createElement('p');
    userCity.classList.add('cityUser');
    const temp = document.createElement('p')
    temp.classList.add('tempUser');
    const image = document.createElement('img')
    image.classList.add('imageUser');

    async function getCity() {
        const response = await fetch(
          `https://get.geojs.io/v1/ip/geo.json`
        );
        const data = await response.json();
        return data.city;
      }
      getCity()
    async function getTemperature(){
        const dataCity = await getCity();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=fd185eec875c277bc16bccdb3629b6af`);
        const data = await response.json();
        // console.log(data)
        return data['main'].temp; 
    }
    getTemperature();
    async function imageGet(){
      const dataCity = await getCity();
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${dataCity}&appid=fd185eec875c277bc16bccdb3629b6af`);
      const data = await response.json();
      // console.log(data.weather[0].icon)
      return data.weather[0].icon;
  }
     imageGet();      
    async function showUserCity() {
        
        userCity.innerHTML = `${await getCity()} `;
        temp.innerHTML =` ${await getTemperature()} °C `;
        image.src = `http://openweathermap.org/img/wn/${await imageGet()}@2x.png`;
        paragraphe.append(userCity,temp,image)
        // console.log(userCity,temp)
    }
    showUserCity(); 
  };
  city();

