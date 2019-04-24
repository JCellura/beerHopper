M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = document.querySelectorAll('option');
  var instances = M.Carousel.init(elems, options);
 });

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, options);
});

$("#tnSubmit").on("click", function(event) {
   event.preventDefault();

   // var toNumber = ("#icon_telephone").val().trim();

   var numbers = {
       to: $("#icon_telephone").val().trim(),  //number to send to
       from: "+18338342546" //Bandwidth number
     };
console.log(numbers);
   // Question: What does this code do??
   $.post("/api/sendText", numbers)
   .then(function(data) {
     console.log(data);
   });

 });


url = window.location.href

userEmail = url.split("http://localhost:3007/users/")[1];

console.log(userEmail);

$("#profile").on("click", function () {
  window.location.href = "/users/" + userEmail;
})
