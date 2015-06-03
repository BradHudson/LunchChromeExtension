document.addEventListener('DOMContentLoaded', function() {
   var voteButton = document.getElementById('vote');
  voteButton.addEventListener('click', function() {
    $.get("http://localhost:4567/vote", { choice: document.getElementById("entry").value } ,function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
  })
});
