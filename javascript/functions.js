xhr = new XMLHttpRequest();

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
      newCard += "<div class=\"footer_link_wrapper\">";
      newCard += "<div class=\"footer_Link_Item\">";
      newCard += "<h2>" + responseObject.Headers[i].Header1 + "</h2>" + " ";
      // newCard += "<div>"
      newCard += responseObject.Header1[i].Section1 + " ";
      newCard += responseObject.Header1[i].Section2 + " ";
      newCard += responseObject.Header1[i].Section3 + " ";
      newCard += responseObject.Header1[i].Section4 + " ";
      newCard += "</div>";
      
      newCard += "<div class=\"footer_Link_Item\">";
      newCard += "<h2>" + responseObject.Headers[i].Header2 + "</h2>" + " ";
      
      newCard += responseObject.Header2[i].Section1 + " ";
      newCard += responseObject.Header2[i].Section2 + " ";
      newCard += responseObject.Header2[i].Section3 + " ";
      newCard += "</div>";
      
      newCard += "<div class=\"footer_Link_Item\">";
      newCard += "<h2>" + responseObject.Headers[i].Header3 + "</h2>" + " ";
      
      newCard += responseObject.Header3[i].Section1 + " ";
      newCard += responseObject.Header3[i].Section2 + " ";
      newCard += "</div>";
      
      newCard += "<div class=\"social_media\">";
      newCard += "<div class=\"social_media_wrapper\">";
      newCard += "<div id=\"footer_logo\">";
      newCard += "<p id=\"website_rights\">" + "©   STAGE FRIGHT 2024. All rights reserved." + "</p>"; 
      newCard += "<div id=\"social_media_icons\">";
      newCard += responseObject.Header3[i].Section1 + " ";
      newCard += responseObject.Header3[i].Section2 + " ";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";
      newCard += "</div>";

      document.getElementById("banana").innerHTML += newCard;
    };
  }
};

xhr.open("GET", "../JSON/footerJSON.json", true);
xhr.send(null);