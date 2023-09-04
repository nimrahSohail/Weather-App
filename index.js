let weather = {
    "apikey" : "2fdab84c478048429d1df2ca5830c1c9",
    "fetchWeather" : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        // console.log(name,icon,description,humidity,temp,speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search .button").addEventListener("click", function(){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
if(event.key=="Enter"){
weather.search();
}
});

weather.fetchWeather("Karachi");

