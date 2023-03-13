import { weather_data } from './data.js';
document.addEventListener("DOMContentLoaded", (event) => 
{
    let [cities,...Others]=weather_data;
    let sel=document.getElementById("dropdownMenuButton");
    let html="";
    html="<option value='' selected disabled hidden>Escoja una ciudad</option>";
    for(let city of weather_data)
    {
        let elemento=`<option class="dropdown-item" value="${city.city}">${city.city}</option>`;
        html=html+elemento;
    }
    sel.innerHTML=html;
    loadDayForecastData(cities);
    let element = document.getElementById('loadinfo');
    element.onclick = (event) => 
    {
        let sel=document.getElementById("dropdownMenuButton");
        for(let c of weather_data)
        {
            if(c.city==sel.value)
            {
                loadWeekForecastData(c);
            }
        }
    };

    sel.addEventListener('change', (event) => {
        let selectedValue = event.target.value;
        Mostrar(selectedValue);
    });    
});
function Mostrar(city)
{
    for(let c of weather_data)
    {
        if(c.city==city)
        {
            loadDayForecastData(c);
        }
    }
}

function loadDayForecastData (city)  
{
	document.getElementById("city").innerHTML=city.city;
	document.getElementById("date").innerHTML=city.date;
	document.getElementById("maxtemperature").innerHTML=city.maxtemperature;
	document.getElementById("mintemperature").innerHTML=city.mintemperature;
	document.getElementById("cloudiness").innerHTML=city.cloudiness;
	document.getElementById("wind").innerHTML=city.wind;
	document.getElementById("wind").innerHTML=city.wind;
	document.getElementById("rainfall").innerHTML=city.rainfall;

    let [dia,noche]=city.forecast_today;
	document.getElementById("late_icon").innerHTML=dia.icon;
	document.getElementById("late_temperature").innerHTML=dia.temperature;
	document.getElementById("late_text").innerHTML=dia.text;
	document.getElementById("late_forecast").innerHTML=dia.forecast;

	document.getElementById("night_icon").innerHTML=noche.icon;
	document.getElementById("night_temperature").innerHTML=noche.temperature;
	document.getElementById("night_text").innerHTML=noche.text;
	document.getElementById("night_forecast").innerHTML=noche.forecast;
    
}
//
function loadWeekForecastData  (city)  
{
    let el=document.getElementsByClassName("list-group")
    let DaysHtml="";
    for(let day of city.forecast_week)
    {
        let _html=`<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${day.text}</h6>
          <span class="text-xs">${day.date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${day.temperature.max}</span> | <span class="text-dark mx-2">${day.temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${day.icon}</i></div>
        </div>
      </li>`
      DaysHtml=DaysHtml+_html;
    }
    el[0].innerHTML=DaysHtml;
}


