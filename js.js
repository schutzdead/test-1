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
