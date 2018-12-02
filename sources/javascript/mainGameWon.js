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
    userText.innerHTML = "<p> Username:" + user.name + "<br> Team:" + user.team + "<br> score:" + user.score + "</p>";
    //declare functions
    }