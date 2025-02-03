

const apiKey = "ee867c3b4387964da76fb8be8ccd84df";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
const weatherImg = document.querySelector('.weather-icon'); // captures weather-icon
const button = document.querySelector('button');
button.addEventListener("click" , function(e){
    checkWeather();
    
});

document.querySelector('.inputCity').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather();
    }
});



async function checkWeather(){
    const cityName = document.querySelector('.inputCity').value;

    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        

    }

    else{
        let data = await response.json();
    console.log(data);
    const iconid = data.weather[0].icon;
    console.log(iconid);





    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `<sup> o</sup> C`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
    weatherImg.src =  `https://openweathermap.org/img/wn/${iconid}@2x.png`; // generate url for weather image

    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";


    }
    
    
}

