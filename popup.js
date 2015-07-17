function getYelpSuggestion(){
	 $.get("https://glacial-hollows-4569.herokuapp.com/",function(data){
        alert("Data: " + data);
        // document.getElementById("yelpsuggestion").value = data;
    });
}

document.addEventListener('DOMContentLoaded', function() {
	// getYelpSuggestion()
   var voteButton = document.getElementById('vote');
  voteButton.addEventListener('click', function() {
    document.getElementById("main").style.display= 'none';
    document.getElementById("loading").style.visibility = 'visible';
    document.getElementById("loading").style.display = 'block';
    $.get("https://glacial-hollows-4569.herokuapp.com/", { name: document.getElementById("entry").value } ,function(data, status){
    });

    setTimeout(function(){
    document.getElementById("loading").style.display = 'none';
    document.getElementById("thanks").style.visibility = 'visible';
    document.getElementById("thanks").style.display = 'block';
    }, 2000);

    


  })
});
