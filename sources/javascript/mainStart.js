window.onload = function(){
    //init fariables
   var button1 = document.getElementById("startNextSite");
   button1.addEventListener("click", function(event){
        console.log("button clicked");
        window.location.href="/SoccerNoid/sources/selectTeam.html";
 });
 var button2 = document.getElementById("startEndSite");
 button2.addEventListener("click", function(event){
      console.log("button clicked");
      window.location.href="/SoccerNoid/sources/end.html";
});
    //logic


    //declare functions
}