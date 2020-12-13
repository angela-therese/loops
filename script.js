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

// Practice 1
//In your JavaScript file, copy and paste the following array:
// var cohortOneStudents = [Sable, David, Joey, Nick, Tommy, Connor, Charles, Russ, Bobby, Josh, Nikki, Matt, Dale, Sydney]
// Use a for loop to print each student's name to the console.

cohortOneStudents = ['Sable', 'David', 'Joey', 'Nick', 'Tommy', 'Connor', 'Charles', 'Russ', 'Bobby', 'Josh', 'Nikki', 'Matt', 'Dale', 'Sydney']

for (i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i])
}

// Practice 2
//In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
//
let interests = ['hula hoops', 'Malta', 'Italian', 'coding', 'writing']

for(i = 0; i < interests.length; i++) {
    console.log(`One of my interests is: ${interests[i]}`)
}


// Practice 3 
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

let favorite = 'Malta'

for(i = 0; i < interests.length; i++) {
    if(interests[i] === favorite)   {
        console.log(`My favorite interest is ${favorite}.`)
    } else {
         console.log(`One of my interests is ${interests[i]}`)
    }

    }

   //Practice 5 (no 4)
    //Use a for loop to output the complete titles to the console.
 var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

 for(i = 0; i < harryPotterTitles.length; i++){
     console.log(`Harry Potter and ${harryPotterTitles[i]}`)
 }

 //Practice 6 
//  Student Grades
// Copy and paste the folowing array of grades into your JavaScript file:

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.
for(i = 0; i < grades.length; i++) {
    if(grades[i] <= 69) {
        console.log('You got an F.');
    } 
    else if(grades[i] <= 76) {
        console.log('You got a D.')
    }
    else if(grades[i] <= 84) {
        console.log('You got a C.')
    } 
    else if(grades[i] <= 92) {
        console.log('You got a B.')
    }
    else if(grades[i] <= 100) {
        console.log('You got an A.')
    }
}

//Write a loop that counts by 2's and creates the following output.
//Output
//2 4 6 8 Who do we appreciate?!

let n = ""
for(i = 2; i < 9; i += 2) {
   n += `${i} `;
   
}
console.log(`${n} who do we appreciate?`)


