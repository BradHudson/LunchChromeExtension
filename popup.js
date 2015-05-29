document.addEventListener('DOMContentLoaded', function() {
   var voteButton = document.getElementById('vote');
  voteButton.addEventListener('click', function() {
    document.getElementById("test").innerHTML = "New text!";
  })
});
