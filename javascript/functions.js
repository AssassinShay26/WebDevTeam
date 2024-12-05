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
      


      newCard += "<div class=\"footer_Container\">";
      
      newCard += "<div class=\"FootHeaders\">";
      newCard += responseObject.Headers[i].Header1 + " ";
      newCard += "</div>";
      
      newCard += responseObject.Header1[i].Section1 + " ";
      newCard += responseObject.Header1[i].Section2 + " ";
      newCard += responseObject.Header1[i].Section3 + " ";
      newCard += responseObject.Header1[i].Section4 + " ";
      
      newCard += "<div class=\"FootHeaders\">";
      newCard += responseObject.Headers[i].Header2 + " ";
      newCard += "</div>";
      
      newCard += responseObject.Header2[i].Section1 + " ";
      newCard += responseObject.Header2[i].Section2 + " ";
      newCard += responseObject.Header2[i].Section3 + " ";

      newCard += "<div class=\"FootHeaders\">";
      newCard += responseObject.Headers[i].Header3 + " ";
      newCard += "</div>";

      newCard += responseObject.Header3[i].Section1 + " ";
      newCard += responseObject.Header3[i].Section2 + " ";
      
      newCard += "</div>";

      newCard += responseObject;
      document.getElementById("banana").innerHTML += newCard;
    };
  }
};

xhr.open("GET", "../JSON/footerJSON.json", true);
xhr.send(null);