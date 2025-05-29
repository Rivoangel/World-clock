setInterval(function(){
    let losAngelesElement = document.querySelector("#los-Angeles");
    let losAngelesDateElement=losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime=moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML= losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Africa/Johannesburg");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]" );
}, 1000);

function updateTime(event){
    let cityTimeZone= event.target.value;
    let cityName=cityTimeZone.replace("-"," ").split("/")[1];
    let cityTime= moment().tz(cityTimeZone);
    let citiesElement= document.querySelector("#cities");

    citiesElement.innerHTML = `
    <div class="city">
        <div><h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div></div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>`
};

let citiesSelect=document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);