window.onload = function() {
    var scores = JSON.parse(localStorage.getItem("SoccerNoidHighscores"));
    var anzeige = 10;
    var inner = "<table class='tableAll'>";
    inner += "<tr class='tableTop'><th>Platzierung</th><th>Name</th><th>Team</th><th>Score</th></tr>"; 
    if(scores.users.length < anzeige){
        anzeige = scores.users.length;
        document.getElementById("headerText").innerHTML = "Das sind die " + anzeige +" besten:";
    }
    for(i = 0 ; i < anzeige; i++){
        var platz = i+1;
        inner += "<tr class='tablePlace'><th>"+platz+"</th><th>"+scores.users[i][0]+"</th><th>"+scores.users[i][1]+"</th><th>"+scores.users[i][2]+"</th></tr>";  
    }
    inner += "</table>";
    document.getElementById("endTableText").innerHTML = inner;
}