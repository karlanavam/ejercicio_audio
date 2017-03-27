var cancion = document.getElementById("rolon");

function playAudio() {
	cancion.play();
}

function pauseAudio() { 
    cancion.pause(); 
}

function reiniciar() {
	cancion.load();
}

function subirVol() {
	cancion.volume+=0.1;
}

function bajarVol() {
	cancion.volume-=0.1;
}

function atrasar() {
	cancion.currentTime-= 10;
}

function adelantar() {
    cancion.currentTime+= 10;
}

cancion.ontimeupdate = function() {
	var rango = document.getElementById("rango")
    rango.value = cancion.currentTime;
};