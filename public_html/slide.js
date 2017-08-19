
function slide1() {
    document.getElementById('filmeimagem').src = "img/IMGtheMartian.JPG";
    document.getElementById('filmenome').textContent = "Perdido em Marte";
    document.getElementById('filmelink').href = "theMartian.html";
    setTimeout("slide2()", 3000);
}

function slide2() {
    document.getElementById('filmeimagem').src = "img/IMGbatmanVSSuperman.jpg";
    document.getElementById('filmenome').textContent = "Batman VS Superman";
    document.getElementById('filmelink').href = "batmanVsSuperman.html";
    setTimeout("slide3()", 3000);
}

function slide3() {
    document.getElementById('filmeimagem').src = "img/IMGstarwarsTheForceAwakens.jpg";
    document.getElementById('filmenome').textContent = "Star Wars - O Despertar da Força";
    document.getElementById('filmelink').href = "starwarsTheForceAwakens.html";
    setTimeout("slide4()", 3000);
}

function slide4() {
    document.getElementById('filmeimagem').src = "img/IMGcivilWar.PNG";
    document.getElementById('filmenome').textContent = "Capitão América: Guerra Civil";
    document.getElementById('filmelink').href = "civilWar.html";
    setTimeout("slide1()", 3000);
}