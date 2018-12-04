window.onload = function(){
    //init variables
    var button1 = document.getElementById("startNextSite"); 
    var button2 = document.getElementById("startEndSite");

    //logic
    button1.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="../selectTeam.html";
    });
    button2.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="../end.html";
     });
    //declare functions
}