$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var firstNameInput = $("#first_name");
    var lastNameInput = $("#last_name");
    var emailInput = $("#email");
    var passwordSelect = $("#password");
    var form = $("#submit");
    // Adding an event listener for when the form is submitted
    $(form).on("click", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var postId;
    var authorId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // // If we have this section in our url, we pull out the post id from the url
    // // In '?post_id=1', postId is 1
    // if (url.indexOf("?post_id=") !== -1) {
    //   postId = url.split("=")[1];
    //   getPostData(postId, "post");
    // }
    // // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    // else if (url.indexOf("?author_id=") !== -1) {
    //   authorId = url.split("=")[1];
    // }
  
    // Getting the authors, and their posts
    // getAuthors();
  
    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
      console.log("hello");
      event.preventDefault();
      // Wont submit the post if we are missing a body, title, or author
      if (!firstNameInput.val().trim() || !lastNameInput.val().trim() || !emailInput.val().trim() || !passwordSelect.val().trim()) {
        return;
      }
      // Constructing a newUser object to hand to the database
      var newUser = {
        firstname: firstNameInput.val().trim(),

        lastname: lastNameInput.val().trim(),

        email: emailInput.val().trim(),

        password: passwordSelect.val().trim()
      };
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      // if (updating) {
      //   newPost.id = postId;
      //   updatePost(newPost);
      // }
      // else {
      submitUser(newUser);
      // }
    };
  
    // Submits a new post and brings user to blog page upon completion
    function submitUser(user) {
      $.post("/api/users", user, function() {
        window.location.href = "/";
      });
    }

});