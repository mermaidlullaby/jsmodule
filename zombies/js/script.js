alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You search around frantically for a weapon. What do you choose?", "axe");
var randomizer = Math.round(Math.random());

alert("You attack the zombie with your " + weapon + ".");

if (randomizer === 0){
	document.getElementsByTagName("section")[0].innerHTML = "<p>You miss with your " + weapon + ". The zombie bites you. You lose!</p><p><a href=\"javascript:location.reload(true)\">Try again?</a></p>";
} else if (randomizer === 1) {
	document.getElementsByTagName("section")[0].innerHTML = "<p>The " + weapon + " successfully hits. You kill the zombie with your " + weapon + ". You win!</p><p><a href=\"javascript:location.reload(true)\">Try again?</a></p>";	
}