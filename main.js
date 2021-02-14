function addUser() {
    playerRedName = document.getElementById("playerRedName").value;
    playerBlueName = document.getElementById("playerBlueName").value;

    localStorage.setItem("playerRedName", palyerRedName);
    localStorage.setItem("playerBlueName", palyerBlueName);

    window.location = "game_page.html";
    
}
