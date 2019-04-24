$("#tnSubmit").on("click", function(event) {
  event.preventDefault();

  // var toNumber = ("#icon_telephone").val().trim();

  var numbers = {
    to: $("#icon_telephone").val().trim(),  //number to send to
    from: "+18338342546" //Bandwidth number
  };

  console.log(numbers);

    // Question: What does this code do??
  $.post("/api/userInvite", numbers)
  .then(function(data) {
    console.log(data);
  });

});


  // Navbar ---------------------------------------------------------
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let options = document.querySelectorAll('option');
  let instances = M.Dropdown.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let options = document.querySelectorAll('option');
  let instances = M.Sidenav.init(elems, options);
});

url = window.location.href

userEmail = url.split("http://localhost:3007/users/")[1];

console.log(userEmail);

var profile;

function handleUserInfo(email) {
  $.ajax({
    method: "GET",
    url: "/api/users/" + email,
  }).then(function(data) {
    // window.location.href = "";
    console.log(data);
    var firstName = data.firstname;
    var lastName = data.lastname;
    $("#name").text(firstName + " " + lastName + "'s Profile");

    profile = data.profile;
    console.log(profile);
    var lightOrDark;
    var dryOrSweet;
    var fruity;
    var spicy;
    var hoppy;
    if (profile[0] === "0") {
      lightOrDark = "Light"} else {lightOrDark = "Dark"};
    if (profile[1] === "0") {
      dryOrSweet = "Dry"} else {dryOrSweet = "Sweet"};
    if (profile[2] === "0") {
      fruity = "Yes"} else {fruity = "No"}
    if (profile[3] === "0") {
      spicy = "Yes"} else {spicy = "No"}
    if (profile[4] === "0") {
      hoppy = "Yes"} else {hoppy = "No"}
    var p = $("<p>");
    p.html("<strong>Flavor Profile</strong>" + "<br>" +  
            "Color: " + lightOrDark + "<br>" +
              "Finish: " + dryOrSweet + "<br>" +
                "Fruity: " + fruity + "<br>" +
                  "Spicy: " + spicy + "<br>" +
                    "Hoppy: " + hoppy);
    p.appendTo("#flavor");

    var beerChoice = data.beerChoice;
    var div = $("<div>");
    div.html("Your Current Flavor Choice is: " + "<strong>" + beerChoice + "</strong>" + "<br>" + " Here Are Some Recommended Beers:");
    div.appendTo("#profile");
  });
}
handleUserInfo(userEmail);

$("#profile").on("click", function () {
  window.location.href = "/users/" + userEmail;
});

var beerList = [];
var randIndexes = [];
var profList = [];
var equalList = [];
var counter = 0;
var newCounter = 0;
var newestCounter = 0;
var newArray = [];

var beerOne = $("#beer1");
var beerTwo = $("#beer2");
var beerThree = $("#beer3");

function writeBeer(beerList) {
  beerOne.html(beerList[0]);
  beerTwo.html(beerList[1]);
  beerThree.html(beerList[2]);
}

function getBeer() {
  $.get("/api/beers", function(data) {
    console.log(data, "beers");

    var randNum = Math.floor(Math.random() * 14 + 1);

    for (var i = 0; i < 3; i++) {
      randIndexes.push(randNum);
      randNum += 3;
    }

    for (var i = 0; i < 3; i++) {
      beerList.push(data[randIndexes[i]].beer_name);
    }

    for (var i = 0; i < 27; i++) {
      profList.push(data[i].prof);
    }

    console.log(beerList);

    writeBeer(beerList);

    console.log(profList);

    var array = [];

    for (var i = 0; i<profList.length; i++) {
      
      if (profile[0].indexOf(profList[i][0]) != -1 ) {
        counter++;
        equalList.push(profList[i]);
      }
    };

    for (var k = 0; k<equalList.length; k++) {
    
      if (profile[1].indexOf(equalList[k][1]) != -1) {
        newCounter++;
        array.push(equalList[k]);

      }
    }

    for (var k = 0; k<array.length; k++) {
    
      if (profile[2].indexOf(array[k][2]) != -1) {
        newestCounter++;
      }
    }

    for (var i=0; i<profList.length; i++) {

      if (array[0] == profList[i]) {
        newArray.push(profList[i]);
      }

    }

    // var newEqualList = [];

    // for (var k = 0; k<equalList.length; k++) {

    //   if (profile[1] === equalList[k][1]) {
        
    //     newEqualList.push(equalList[k]);
    //   }
    // }

    
    console.log(equalList);
    // console.log("newEqualList = " + newEqualList);
    console.log(counter);
    console.log(newCounter);
    console.log(newestCounter);
    console.log(array);
    console.log(newArray);
    
  });
}

getBeer();

// console.log(getBeer());


