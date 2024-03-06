 
(async function() {
    
    const input = document.querySelector('.input-city');
    console.log(input)
    const button = document.querySelector('.btn');
    console.log(button)
    function clickChangeCity(){
        let newUserCity = document.querySelector('.cityUser')
        newUserCity.innerText = input.value;
        console.log(newUserCity)
    }
    button.addEventListener('click', clickChangeCity);
})()


