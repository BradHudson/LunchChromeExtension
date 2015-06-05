document.addEventListener('DOMContentLoaded', function() {
   var voteButton = document.getElementById('vote');
  voteButton.addEventListener('click', function() {
    $.get("https://glacial-hollows-4569.herokuapp.com/vote", { choice: document.getElementById("entry").value } ,function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
  })
});
