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
      newCard += "<p class=\"jshr2Text\">" + responseObject.NATourDates[i].Location + "&nbsp";
      newCard += "<p class=\"city\">" + responseObject.NATourDates[i].date + "</p>" + "<button class=\"TicketButton\">" + "Buy Tickets Now" + "</button>" + "<br>";
      newCard += "<hr class=\"jshr\">";
      newCard += "</p>";
      newCard += "</div>";
      document.getElementById("tour1").innerHTML += newCard;
    };

    for (let i = 0; i < responseObject.SATourDates.length; i++) {
      let newCard = "";
      newCard += "<div class='review'>";
      newCard += "<p class=\"jshr2Text\">" + responseObject.SATourDates[i].Location + "&nbsp";
      newCard += "<p class=\"city\">" + responseObject.NATourDates[i].date + "</p>" + "<button class=\"TicketButton\">" + "Buy Tickets Now" + "</button>" + "<br>";
      newCard += "<hr class=\"jshr\">";
      newCard += "</p>";
      newCard += "</div>";
      document.getElementById("tour2").innerHTML += newCard;
    };

    for (let i = 0; i < responseObject.EUTourDates.length; i++) {
      let newCard = "";
      newCard += "<div class='review'>";
      newCard += "<p class=\"jshr2Text\">" + responseObject.EUTourDates[i].Location + "&nbsp";
      newCard += "<p class=\"city\">" + responseObject.NATourDates[i].date + "</p>" + "<button class=\"TicketButton\">" + "Buy Tickets Now" + "</button>" + "<br>";
      newCard += "<hr class=\"jshr\">";
      newCard += "</p>";
      newCard += "</div>";
      document.getElementById("tour3").innerHTML += newCard;
    };  

    // for (let i = 0; i < responseObject.RUTourDates.length; i++) {
    //   let newCard = "";
    //   newCard += "<div class='review'>";
    //   newCard += "<p class=\"jshr2Text\">" + responseObject.RUTourDates[i].Location + "&nbsp";
    //   newCard += "<p class=\"city\">" + responseObject.NATourDates[i].date + "</p>" + "<button class=\"TicketButton\">" + "Buy Tickets Now" + "</button>" + "<br>";
    //   newCard += "<hr class=\"jshr\">";
    //   newCard += "</p>";
    //   newCard += "</div>";
    //   document.getElementById("tour4").innerHTML += newCard;
    // };

    for (let i = 0; i < responseObject.ASTourDates.length; i++) {
      let newCard = "";
      newCard += "<div class='review'>";
      newCard += "<p class=\"jshr2Text\">" + responseObject.ASTourDates[i].Location + "&nbsp";
      newCard += "<p class=\"city\">" + responseObject.NATourDates[i].date + "</p>"    + "<button class=\"TicketButton\">" + "Buy Tickets Now" + "</button>" + "<br>";
      newCard += "<hr class=\"jshr\">";
      newCard += "</p>";
      newCard += "</div>";
      document.getElementById("tour5").innerHTML += newCard;
    };
  }
};

xhr3.open("GET", "../JSON/Dates.json", true);
xhr3.send(null);