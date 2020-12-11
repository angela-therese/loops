//Loops--Lightning exercise 1 

let i = 1

while(i <= 100) {
    console.log('TWEET TWEET')
    i++
}

for(let i = 0; i < 100; i++){
    console.log('TWEET TWEET TWEET')
}

//Loops lightning exercise 2
// Favorite Foods
// In your JavaScript, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
// Loop through the array and print each food item to the console.

let favoriteFoods = ['cheesecake', 'fajitas', 'grapes', 'anything curried']

i = 0

while(i < favoriteFoods.length){
    console.log(favoriteFoods[i])
    i++

}

for(let i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i])
}

//Random practice
let cousins = ['Luca', 'Hazel', 'Isidora', 'Cecilia']

for(let i = 0; i < cousins.length; i++) {
    console.log(`${cousins[i]} is one of the four best kids ever!`)
}





// Challenge-- Weather Data from Variables and Data Types
let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 29,
       low: 19
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 30,
       low: 19
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 96,
       low: 21
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
// If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")

   for(i = 0; i < weatherForecast.length; i++){
       if(weatherForecast[i].temperature.low < 20) {
           console.log('Wednesday will be cold as heck!')
       }
   }



   // If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")

for(i = 0; i < weatherForecast.length; i++){
    if(weatherForecast[i].temperature.high > 95) {
        console.log(`${weatherForecast[i].day} will be hot as heck!`)
    }
}