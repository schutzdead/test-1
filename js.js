function f() {
	if(confirm("As-tu apprécié ce film ?"))
		alert("Impeccable");
	else
		alert("Aie");
}

function show() {
	var msgsousmdp;
	if (motdepasse.mdp.value.length > 12) {
		msgsousmdp = "Excellente sécurité";
		myloc.style.color = "#249145";
	}
	else if(motdepasse.mdp.value.length >= 8 && motdepasse.mdp.value.length <= 12){
		msgsousmdp = "Bonne sécurité";
		myloc.style.color = "#31C45D";
	}
	else{
		msgsousmdp = "Mauvaise sécurité";
		myloc.style.color = "#EE5F5D";
	}	
const aa = document.getElementById("myloc")
aa.innerText = msgsousmdp

}

const eye = document.querySelector('.feather-eye');
const eyeoff = document.querySelector('.feather-eye-off');
const passwordfield = document.querySelector('input[type=password]');

eye.addEventListener('click', () => {
	eye.style.display = "none";
	eyeoff.style.display = "block";
	passwordfield.type = "text";

})

eyeoff.addEventListener('click', () => {
	eye.style.display = "block";
	eyeoff.style.display = "none";
	passwordfield.type = "password";

})


let numberSeasons = 6
let numberEpisode = 12
let dureeepisode = 45.1
let dureepub = 5.2

tempstotal = ((dureepub*numberSeasons)+(dureeepisode*numberEpisode*numberSeasons))/60
arr = Math.floor(tempstotal)
tempsminute = (tempstotal - arr)*60 

const container = document.getElementById("container");
container.innerText = "Votre série comprend " + numberSeasons + " saison(s) de " + numberEpisode + " épisodes.\n"
+ "Temps de visionnage pour cette série : " + arr + " heures et " + tempsminute.toFixed(0) + " minutes." ;

/*const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
	loader.classList.add('fondu-out');
})*/
//dezdze
//