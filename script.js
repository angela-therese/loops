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

//In your JavaScript file, copy and paste the following array:
// var cohortOneStudents = [Sable, David, Joey, Nick, Tommy, Connor, Charles, Russ, Bobby, Josh, Nikki, Matt, Dale, Sydney]
// Use a for loop to print each student's name to the console.

cohortOneStudents = ['Sable', 'David', 'Joey', 'Nick', 'Tommy', 'Connor', 'Charles', 'Russ', 'Bobby', 'Josh', 'Nikki', 'Matt', 'Dale', 'Sydney']

for (i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i])
}

// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.

let interests = ['hula hoops', 'Malta', 'Italian', 'coding', 'writing']

for(i = 0; i < interests.length; i++) {
    console.log(`One of my interests is: ${interests[i]}`)
}

//Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

let favorite = 'Malta'

for(i = 0; i < interests.length; i++) {
    if(interests[i] === favorite)   {
        console.log(`My favorite interest is ${favorite}.`)
    } else {
         console.log(`One of my interests is ${interests[i]}`)
    }

    }

