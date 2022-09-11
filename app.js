let weather ={
  "apiKey": "4ed1d0be5834872b22ec378f2caa98c6",// sparar min api nyckel in i objekten
  //skapar en function med city som parameter så att den sparar användarens input
  fetchWeather: function(city){
    //denna kod tar användarens input och min apikey för att skicka till url och får tillbaka information om staden
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+ this.apiKey+"&units=metric") 
      .then((response)=> response.json())//när den har hämtat url då ger den en response till JSON
      .then((data)=> this.displayWeather(data))// för att skriva ut datan till skärmen
  },
  displayWeather: function(data){//för att skriva ut allt så skapar vi variabler för vår data
      const{name} = data; //tar ut namnet på staden från vår api's city objekt
      const{icon, description}= data.weather[0];//hämtar ut vädret och bilden, eftersom det är en array så skrev jag [0] för att få ut datan
      const{temp,humidity} = data.main;//fuktighet
      const{speed} = data.wind;//vind
      document.querySelector(".city").innerText = name;//skriver ut namnet på skärmen
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png"; //skriver ut bilden på vädret
      document.querySelector(".description").innerText = description;// skriver ut beskrivning
      document.querySelector(".temp").innerText = temp + "°C";//skriver ut celsius
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";//skriver ut fuktigheten
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";//hur snabtt vinden blåser
        document.querySelector(".weather").classList.remove("loading")//tar bort class loading från html.
  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);//ger tillbaks vår value från vår input
  }
};
document.querySelector(".search button").addEventListener("click",()=>{
weather.search();//gör så att vi kan avnända knappen för att söka
});

document.querySelector(".search-bar").addEventListener("keyup", (event)=>{//vi kan använda enter på vår tangentbord
if(event.key== "Enter"){
weather.search();
}
});
