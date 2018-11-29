window.onload = function(){
    //init variables
    var button1 = document.getElementById("team1");
    var button2 = document.getElementById("team2");
    var button3 = document.getElementById("team3");
    var buttonNext = document.getElementById("selectNextSite");
    var inputname = document.getElementById("userInput");
    var inputteam = document.getElementById("teamInput");

    var username = "";
    var userteam = "Kein Team ausgesucht";
    var json;

    //logic
    inputteam.value = userteam;
    button1.addEventListener("click", function(event){
        userteam = "Germany";
        inputteam.value = userteam;
    });
    button2.addEventListener("click", function(event){
        userteam = "Italy";
        inputteam.value = userteam;
    });
    button3.addEventListener("click", function(event){
        userteam = "Turkey";
        inputteam.value = userteam;
    });
    buttonNext.addEventListener("click", function(event){
        username = inputname.value;
        userteam = inputteam.value;
        if(username == "" || userteam == "Kein Team ausgesucht"){
            alert("Please select username and team!");
            return;
        } 
        userinit(username, userteam);
        window.location.href="/SoccerNoid/sources/game.html";
     });
    //declare functions
     function userinit(name, team){
        var obj = {"name": name, "team": team};
        localStorage.setItem('userinitStorage', JSON.stringify(obj));
     }
}