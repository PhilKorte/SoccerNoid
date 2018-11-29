window.onload = function(){
    //init variables
    var button1 = document.getElementById("gameOverNew"); 
    var button2 = document.getElementById("gameOverEndSite");
    var user = JSON.parse(localStorage.getItem("userexitStorage"));
    var userText = document.getElementById("userText");

    //logic
    button1.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="/SoccerNoid/sources/selectTeam.html";
    });
    button2.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="/SoccerNoid/sources/end.html";
     });
    userText.innerHTML = "<p>" + user.name + "<br>" + user.team + "<br>" + user.score + "</p>";
    //declare functions
}