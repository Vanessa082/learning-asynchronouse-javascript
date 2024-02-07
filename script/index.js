
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

// http request && status code

const request = new XMLHttpRequest

request.addEventListener('readystatechange',() => {
    // console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText)
    } else if(request.readyState){
        console.log('coould not fetch the data')
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send()