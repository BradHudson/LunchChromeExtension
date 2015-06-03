document.addEventListener('DOMContentLoaded', function() {
   var voteButton = document.getElementById('vote');
  voteButton.addEventListener('click', function() {
    document.getElementById("test").innerHTML = "New text!";
    $.get("http://localhost:4567/vote", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
  })
});
