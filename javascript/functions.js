let xhr2 = new XMLHttpRequest();

let times;

xhr2.onload = function () {
  //check status
  console.log(xhr2.status);

  if (xhr2.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr2.responseText);

    console.log(responseObject);

    //create loop and stuff
    for (let i = 0; i < responseObject.Headers.length; i++) {
      let newCard = "";

      newCard += '<div class="footer_Container">';
      newCard += '<div class="footer_link_wrapper">';
      newCard += '<div class="footer_Link_Item">';
      newCard += "<h2>" + responseObject.Headers[i].Header1 + "</h2>" + " ";
      // newCard += "<div>"
      newCard += "<ul>";
      newCard += "<li>" + responseObject.Header1[i].Section1 + "</li>";
      newCard += "<li>" + responseObject.Header1[i].Section2 + "</li>";
      newCard += "<li>" + responseObject.Header1[i].Section3 + "</li>";
      newCard += "<li>" + responseObject.Header1[i].Section4 + "</li>";
      newCard += "</ul>";
      newCard += "</div>";

      newCard += '<div class="footer_Link_Item">';
      newCard += "<h2>" + responseObject.Headers[i].Header2 + "</h2>" + " ";
      newCard += "<ul>";
      newCard += "<li>" + responseObject.Header2[i].Section1 + "</li>";
      newCard += "<li>" + responseObject.Header2[i].Section2 + "</li>";
      newCard += "<li>" + responseObject.Header2[i].Section3 + "</li>";
      newCard += "</ul>";
      newCard += "</div>";

      newCard += '<div class="footer_Link_Item">';
      newCard += "<h2>" + responseObject.Headers[i].Header3 + "</h2>" + " ";
      newCard += "<ul>";
      newCard += "<li>" + responseObject.Header3[i].Section1 + " ";
      newCard += "<li>" + responseObject.Header3[i].Section2 + " ";
      newCard += "</ul>";
      newCard += "</div>";

      newCard += '<div class="social_media">';
      newCard += '<div class="social_media_wrapper">';
      newCard += '<div id="footer_logo">';
      newCard +=
        '<p class="website_rights" style="color:var(--clr-DarkGrey);">' +
        "©   STAGE FRIGHT 2024. All rights reserved." +
        "</p>";
      newCard += '<div id="social_media_icons">';
      newCard += '<div id="SocialFirst">';
      newCard += responseObject.Header4[i].Section1Link;
      newCard += responseObject.Header4[i].Section2Link;
      newCard += responseObject.Header4[i].Section3Link;
      newCard += '</div>'
      newCard += '<div id="SocialSecond">';
      newCard += responseObject.Header4[i].Section4Link;
      newCard += responseObject.Header4[i].Section5Link;
      newCard += responseObject.Header4[i].Section6Link;
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";

      document.getElementById("banana").innerHTML += newCard;
    }
  }
};

xhr2.open("GET", "../JSON/footerJSON.json", true);
xhr2.send(null);
