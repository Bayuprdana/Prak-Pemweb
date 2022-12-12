/* DARK MODE */
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("lightmode");
    if(document.body.classList.contains("lightmode")){
        icon.src = "lightmode.png";
    } else {
        icon.src = "darkmode.png";
    }
}