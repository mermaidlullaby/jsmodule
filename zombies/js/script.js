alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You search around frantically for a weapon. What do you choose?","axe");
var randomizer = Math.round(Math.random());

alert("You attack the zombie with your " + weapon + ".");

if (randomizer === 0){
	alert("The zombie bites you. You lose!");
} else if (randomizer === 1) {
	alert("You kill the zombie with your " + weapon + ". You win!");	
}
