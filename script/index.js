
// switch (prompt("What is the weather like?")) { case "rainy":
// console.log("Remember to bring an umbrella.");
// break;
// case "sunny":
// console.log("Dress lightly."); case "cloudy":
// console.log("Go outside.");
//      break;
//    default:
// console.log("Unknown weather type!");
// break; }

const request = new XMLHttpRequest

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send()