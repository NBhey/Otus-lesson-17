(async function () {
    const paragraphe = document.querySelector('div');
    const userCity = document.createElement('p');
    const temp = document.createElement('p')
    
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
        return data['main'].temp;
    }
    getTemperature();
      
    async function showUserCity() {
        userCity.innerText = await getCity();
        temp.innerText =` ${await getTemperature()} °C`;
        paragraphe.append(userCity,temp)
        console.log(userCity,temp)
    }
    showUserCity()

    
   
    
    
  })();
  

