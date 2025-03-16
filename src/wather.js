const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = '240178f9602740d8e210dd3ebb2e43c4'
const city = document.querySelector('.cityname');
const btn = document.querySelector('.sbtn');
const sty = document.querySelector('.skyimg');

btn.addEventListener('click', () => {
    checkwather();
});

city.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        checkwather();
    }
});

function checkwather(){
    const cityname = city.value.trim();
    check(cityname);
}

async function check(cityname){
    const risponse = await fetch(api+cityname+`&appid=${apikey}`);
    var data = await risponse.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = data.main.temp+'°c';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humi').innerHTML = data.main.humidity+'%';
    document.querySelector('.wspeed').innerHTML = data.wind.speed+' km/h';

    if (data.weather[0].main === 'Clear') {
        sty.src = 'https://img.icons8.com/?size=96&id=3xRYzUjMSEhe&format=png';
    }
    else if (data.weather[0].main === 'Rain') {
        sty.src = 'https://img.icons8.com/?size=96&id=AssIxvKKnXf0&format=png';  
    }
    else {
        sty.src = 'https://img.icons8.com/?size=96&id=zAG9SwzkuWD5&format=png'; 
    }
};



