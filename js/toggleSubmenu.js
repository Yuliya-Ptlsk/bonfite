var subMenu = document.getElementById('subMenu');
subMenu.style.display = "none";
var firstElMainMenu = document.getElementById('firstElMainMenu');
firstElMainMenu.style.backgroundColor = "transparent";

function toggleSubMenu(){
    if(subMenu.style.display === "none"){
        subMenu.style.display = "block";
        firstElMainMenu.style.backgroundColor = "rgba(157,144,166,.4)";

    }
    else{
        subMenu.style.display = "none";
        firstElMainMenu.style.backgroundColor = "transparent";
    }
}

