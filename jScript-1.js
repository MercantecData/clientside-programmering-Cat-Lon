var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=1d471668edec21b6fe58ad100710764d"
var promise
var jPromise
var userInput

function FetchWeatherData()
{
    userInput = document.getElementById('textBox').value
    if(document.getElementById('textBox')!= undefined)
    {
        url =  "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=1d471668edec21b6fe58ad100710764d"
    }
    promise = fetch(url)
    .then(data=> data.text())
    .then(data=>jPromise = JSON.parse(data))
    .then(data=> PrintWeatherData())
    .then (data=> setTimeout(FetchWeatherData, 900))
}

function PrintWeatherData()
{
    document.getElementById('temp').innerHTML = "Temperatur: " + jPromise.main["temp"] + "<br>" +  "Feel: " + jPromise.main["feels_like"] + "<br>" +  "Max Temp: " + jPromise.main["temp_max"] + "<br>" + "Min Temp: " + jPromise.main["temp_min"]
}