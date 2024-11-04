//create XMLHttpRequest object
let xhr = new XMLHttpRequest();

let xhr2 = new XMLHttpRequest();

let times;



//when state of requeset changes
xhr.onload = function(){
    //this is to display the status of the webpage
    console.log(xhr.status)

    //if server response == 'ok', create some HTML
    if(xhr.status === 200){
        //create an object to get the data from json file
        let responseObject = JSON.parse(xhr.responseText)

        console.log(responseObject)
        let newCard = ''; //string object to hold 'card' info and layout

        //loop through responseObject to obtain all elements
        //and data to add to the "card" on the webpage
        for(let i=0; i<responseObject.events.length; i++){
            newCard += "<div class='event'>"
            newCard += "<img src='" + responseObject.events[i].map + "'"
            newCard += "alt='" + responseObject.events[i].location + "' />"
            newCard += "<p><b>" + responseObject.events[i].location + "<br>"
            newCard += responseObject.events[i].date + "</b></p>"
            
            //add session / times for each location
            let loc = Object.keys(times)[i]
            console.log(loc)
            for(let i2 = 0; i2 < times[loc].length; i2++){
                newCard += "<p><b> Intinerary "
                newCard += "<li>" + times[loc][i2].time + "&nbsp;"
                newCard += times[loc][i2].title + "</b></p>"
                newCard += "</li>"
            }

            newCard += "</div>"
        }        
        //add new Card content to the webpage
        document.getElementById('content').innerHTML = newCard

    }
}

xhr2.onload = function(){
    if(xhr2.status === 200){
        times = JSON.parse(xhr2.responseText)
    }
    else{
        console.log('sorry, the timetable could not be loaded')
    }
}

xhr2.open('GET', "./data/example.json", true)
xhr2.send(null)

//prepare the request
xhr.open('GET', './data/data.json', true);
//send the request
xhr.send(null);