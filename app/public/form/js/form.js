M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var options = document.querySelectorAll('option');
  var instances = M.FormSelect.init(elems, options);
});


// Navbar -----------------------------------------------------------
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

var newForm = "";


$("input:radio").on("click", function(event) {
  newForm = "";
  if ($("#light").prop("checked")) {
    newForm += "0"
    console.log(newForm[0]);
  } else { newForm += "1"};


  // if ($("#dark").prop("checked")) {
  //   console.log("dark");
  // }
  
  if ($("#dry").prop("checked")) {
    newForm += "0";
  } else { newForm += 1};
  
  // if ($("#sweet").prop("checked")) {
  //   console.log("sweet");
  // }
  
  if ($("#fruitYes").prop("checked")) {
    newForm += "0";
  } else { newForm += "1"};
  
  // if ($("#fruitNo").prop("checked")) {
  // }

  if ($("#spiceYes").prop("checked")) {
    newForm += "0";
  } else {newForm += "1"};
  
  // if ($("#spiceNo").prop("checked")) {
  //   console.log("no spice");
  // }

  if ($("#hopYes").prop("checked")) {
    newForm += "0";
  } else {newForm += "1"};
  
  // if ($("#hopNo").prop("checked")) {
  //   console.log("no hop");
  // }
  
  console.log("---------");
  console.log(newForm);
  return newForm;
});

var object =  {};

$("#submit").on("click", function() {
  console.log(newForm);
  var beerChoice = $('#beers').val().trim();
  object =  {
    profile: newForm,
    beerChoice: beerChoice
  }
  console.log(object);
  updateUser(object);

  
});

url = window.location.href

userEmail = url.split("http://localhost:3007/form/")[1];

console.log(userEmail);


function updateUser(data) {
  $.ajax({
    method: "PUT",
    url: "/api/users",
    data: data
  }).then(function() {
    window.location.href = "/users/" + userEmail;
  });
}



