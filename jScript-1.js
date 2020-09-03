var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=1d471668edec21b6fe58ad100710764d&lang=da&units=metric"
var promise
var jPromise
var userInput
var wDisplayCount = 0
//var storedCities

function NewWeatherDisplay()
{
    document.getElementById('body').innerHTML += `<div id=\"temp${wDisplayCount}\"><textarea id=\"textBox${wDisplayCount}\"></textarea> <button onclick=\"FetchWeatherData(${wDisplayCount})\">hvordan er vejret?</button></div>`
    wDisplayCount++
}//comment

function FetchWeatherData(num)
{
    console.log("fetching")
    userInput = document.getElementById(`textBox${num}`).value
    if(document.getElementById(`textBox${num}`)!= undefined)
    {
        url =  "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=1d471668edec21b6fe58ad100710764d&lang=da&units=metric"
        //storedCities[num] = url
    }
    promise = fetch(url)
    .then(data=> data.text())
    .then(data=> jPromise = JSON.parse(data))
    .then(data=> PrintWeatherData(num))
    //.then(setTimeout(FetchWeatherData(num), 9000))
}

function PrintWeatherData(num)
{
    document.getElementById(`temp${num}`).innerHTML = `<img src=\"http://openweathermap.org/img/wn/${jPromise.weather[0].icon}@2x.png\">`+ "<br>" + jPromise.weather[0].description + "<br>" +  "Temperatur: " + jPromise.main["temp"] + "<br>" +  "Feel: " + jPromise.main["feels_like"] + "<br>" +  "Max Temp: " + jPromise.main["temp_max"] + "<br>" + "Min Temp: " + jPromise.main["temp_min"]
}