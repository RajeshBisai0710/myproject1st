let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location = document.getElementById("location").value 
     let fetchweather =async()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7088ac1089b5d73b28f5e264fc4db992
`)
let finaldata=await data.json()

// console.log(finaldata.weather[0].description)
// console.log(Math.trunc(finaldata.main.temp - 273))
// console.log(finaldata.main.humidity)

let tempvalue=Math.trunc(finaldata.main.temp - 273)
let humidityval=finaldata.main.humidity
let descriptionval=(finaldata.weather[0].main).toUpperCase

let desc=document.getElementById("Rainy")
desc.innerHTML=descriptionval.toUpperCase()

let temp=document.querySelector("#temp>h1")
temp.innerHTML=`${tempvalue}<sup>0</sup>`

let humid=document.querySelector("#humidity>h1")
humid.innerHTML=humidityval+` KMPH`

let img=document.getElementById("img")
let bgc=document.getElementById("container")






     }
     fetchweather()


     
});