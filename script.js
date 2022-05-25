$('#btnGetWeather').click(function(){

var celcius = document.getElementById("celcius");
var plaats = document.getElementById("plaats");

var weatherCity = $('#txtCity').val();
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatherCity + '&units=metric&lang=nl' + '&appid=dcc9725bc41c077dbbb03f16ef2fcb9f';

$.ajax({
    url: weatherUrl,
    type: 'GET',
    dataType:'jsonp',
    contentType:'application/json',
    success: function (weather){
    console.log(weather);
    // alles Oke 
        celcius.innerHTML = Math.round(weather.main.temp) + " graden";
        plaats.innerHTML = weather.name;
    },
})
});