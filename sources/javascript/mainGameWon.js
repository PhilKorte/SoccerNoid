window.onload = function(){
    //init variables
    var button1 = document.getElementById("gameOverNew"); 
    var button2 = document.getElementById("gameOverEndSite");
    var user = JSON.parse(localStorage.getItem("userexitStorage"));
    var userText = document.getElementById("userText");
    var music = document.getElementById("audiofile");

    //logic
    music.play();
    button1.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="./selectTeam.html";
    });
    button2.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="./end.html";
     });
    userText.innerHTML = "<p> Username:" + user.name + "<br> Team:" + user.team + "<br> Score:" + user.score + "</p>";
    //declare functions
    } 