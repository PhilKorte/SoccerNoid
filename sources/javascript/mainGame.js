window.onload = function(){
    //init variables
    var user = JSON.parse(localStorage.getItem('userinitStorage')); 
    var scoreboard = document.getElementById("scoreboard");
     
    //logic
    scoreboard.innerHTML = "<p>"+user.name + " " + user.team+ "</p>";

    //declare functions
}