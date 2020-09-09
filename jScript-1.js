var url = "https://api.openweathermap.org/data/2.5/forecast?q=Viborg&appid=1d471668edec21b6fe58ad100710764d"
var promise
var jPromise
var userInput
var url2Output
var wDisplayCount = 0
var wStart

function NewWeatherDisplay()
{
   wStart = wDisplayCount + 5
   $("#template").clone().attr("id",`dis${wDisplayCount}`).appendTo("#weatherDis")
   $(`#dis${wDisplayCount}`).children("#button").attr("onclick", `FetchWeatherData(${wDisplayCount})`)
   wDisplayCount++
   while (wDisplayCount < wStart)
   {
       CreateSubDisplay()
   }
}

function CreateSubDisplay()
{
    $("#template").clone().attr("id",`dis${wDisplayCount}`).appendTo("#weatherDis")
    $(`#dis${wDisplayCount}`).children("#button").remove()
    $(`#dis${wDisplayCount}`).children("#textarea").remove()
    wDisplayCount++
}

function FetchWeatherData(num)
{
    console.log("fetching")
    userInput = $(`#dis${num}`).children("textarea").val()
    if(userInput != "")
    {
        url =  "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=1d471668edec21b6fe58ad100710764d&lang=da&units=metric"
    }
    promise = fetch(url)
    .then(data=> data.text())
    .then(data=> jPromise = JSON.parse(data))
    .then(data=> PrintWeatherData(num))
}

function PrintWeatherData(num)
{
    var i = num
    var endCheck
    while(num < 40)
    {
        $(`#dis${i}`).children("textarea").remove()
        $(`#dis${i}`).children("button").remove()
        $(`#dis${i}`).children("#img").attr("src",`http://openweathermap.org/img/wn/${jPromise.list[num].weather[0].icon}@2x.png`)
        $(`#dis${i}`).children("#name").html(jPromise.city.name)
        $(`#dis${i}`).children("#description").html(jPromise.list[num].weather[0].description)
        $(`#dis${i}`).children("#dtText").html(jPromise.list[num].dt_txt)
        $(`#dis${i}`).children("#temp").html(`Temperatur: ${jPromise.list[num].main["temp"]}`)
        $(`#dis${i}`).children("#feel").html(`Feel: ${jPromise.list[num].main["feels_like"]}`)
        $(`#dis${i}`).children("#maxTemp").html(`max temp: ${jPromise.list[num].main["temp_max"]}`)
        $(`#dis${i}`).children("#minTemp").html(`min temp: ${jPromise.list[num].main["temp_min"]}`)
        i++
        num = num + 8
    }
}