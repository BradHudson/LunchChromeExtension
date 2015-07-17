var unique_id = "";

function getYelpSuggestion(){
	 $.get("https://glacial-hollows-4569.herokuapp.com/",function(data){
        alert("Data: " + data);
        // document.getElementById("yelpsuggestion").value = data;
    });
}

function getRandomToken() {
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
    return hex;
}

function checkUser(){
  //chrome.storage.sync.clear();
  chrome.storage.sync.get('userid', function(items) {
    var userid = items.userid;
    if (userid){
      unique_id = userid;
      useToken(userid);
    } else {
        userid = getRandomToken();
        unique_id = userid;
    }
    });
    function useToken(userid) {
        preventVote()
        chrome.storage.local.clear();
    }
}

function preventVote(){
  document.getElementById("main").style.display= 'none';
  document.getElementById("loading").style.display = 'none';
  document.getElementById("thanks").style.visibility = 'visible';
  document.getElementById("thanks").style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
	// getYelpSuggestion()

   checkUser();

   var voteButton = document.getElementById('vote');
    voteButton.addEventListener('click', function() {
      chrome.storage.sync.set({userid: unique_id}, function() {
        });
    document.getElementById("main").style.display= 'none';
    document.getElementById("loading").style.visibility = 'visible';
    document.getElementById("loading").style.display = 'block';
    $.get("https://glacial-hollows-4569.herokuapp.com/", { name: document.getElementById("entry").value, uid: unique_id } ,function(data, status){
    });

    setTimeout(function(){
    document.getElementById("loading").style.display = 'none';
    document.getElementById("thanks").style.visibility = 'visible';
    document.getElementById("thanks").style.display = 'block';
    }, 2000);
    })
});
