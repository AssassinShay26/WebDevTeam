let xhr = new XMLHttpRequest();

let times;

xhr.onload = function () {
  //check status
  console.log(xhr.status);

  if (xhr.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr.responseText);

    console.log(responseObject);
    
    //create loop and stuff
    for (let i = 0; i < responseObject.Headers.length; i++) {
      let newCard = "";
      newCard += "<div id=\"footer_container\">";
      newCard += responseObject.Headers[0].Headers
      newCard += responseObject.Header1[i].Header1
      newCard += responseObject.Headers[1].Headers
      newCard += responseObject.Header2[i].Header2
      newCard += responseObject.Headers[2].Headers
      newcard += responseObject.Header3[i].Header3
      newCard += responseObject.Header4[i].Header4
      newCard += "</div>";
      document.getElementById("banana").innerHTML += newCard;
    };
  }
};

xhr.open("GET", "../JSON/footerJSON.json", true);
xhr.send(null);