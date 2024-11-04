let xhr3 = new XMLHttpRequest();

let times2;

xhr3.onload = function () {
  //check status
  console.log(xhr3.status);

  if (xhr3.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr3.responseText);

    console.log(responseObject);
    
    //create loop and stuff
    for (let i = 0; i < responseObject.NATourDates.length; i++) {
      let newCard = "";
      newCard += "<div class='review'>";
      newCard += "<p><b>" + responseObject.NATourDates[i].Location + "<br>";
      newCard += responseObject.NATourDates[i].Date + "<br>";
      newCard += "</p></b>";
      newCard += "</div>";
      document.getElementById("tour1").innerHTML += newCard;
    };

    // for (let i = 0; i < responseObject.review2.length; i++) {
    //   let newCard = "";
    //   newCard += "<div class='review'>";
    //   newCard += "<p><b>" + responseObject.review2[i].name + "<br>";
    //   newCard += responseObject.review2[i].stars + "<br>";
    //   newCard += responseObject.review2[i].head + "<br>";
    //   newCard += responseObject.review2[i].review + "<br>";
    //   newCard += responseObject.review2[i].attribution + "<br>";
    //   newCard += "</p></b>";
    //   newCard += "</div>";
    //   document.getElementById("f_re2").innerHTML += newCard;
    // };

    // for (let i = 0; i < responseObject.review3.length; i++) {
    //   let newCard = "";
    //   newCard += "<div class='review'>";
    //   newCard += "<p><b>" + responseObject.review3[i].name + "<br>";
    //   newCard += responseObject.review3[i].stars + "<br>";
    //   newCard += responseObject.review3[i].head + "<br>";
    //   newCard += responseObject.review3[i].review + "<br>";
    //   newCard += responseObject.review3[i].attribution + "<br>";
    //   newCard += "</p></b>";
    //   newCard += "</div>";
    //   document.getElementById("f_re3").innerHTML += newCard;
    // };    
  }
};

xhr3.open("GET", "../javascript/Dates.json", true);
xhr3.send(null);
