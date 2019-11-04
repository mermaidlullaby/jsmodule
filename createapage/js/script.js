document.getElementById("addbutton").addEventListener("click", function(event) {
	event.preventDefault();
	let elementchoice = document.getElementById("element").value;
	let textchoice = document.getElementById("text").value;
	
	let addelement = document.createElement(elementchoice);
	let addtext = document.createTextNode(textchoice);
	
	addelement.appendChild(addtext);
	
	document.getElementById("custompage").appendChild(addelement);
});

document.getElementById("customfont").addEventListener("change", function() {
	let font = document.getElementById("customfont").value;
	document.body.style.fontFamily = font;
});
document.getElementById("bgcolor").addEventListener("change", function() {
	let bgcolor = document.getElementById("bgcolor").value;
	document.body.style.backgroundColor = bgcolor;
});
document.getElementById("fontcolor").addEventListener("change", function() {
	let fontcolor = document.getElementById("fontcolor").value;
	document.body.style.color = fontcolor;
});
document.getElementById("fontsize").addEventListener("change", function() {
	let fontsize = document.getElementById("fontsize").value;
	console.log(fontsize);
	document.body.style.fontSize = (fontsize + "px");
});

function click(e) {
	let action = confirm("Are you sure you want to remove this element? You cannot undo this!");
	if (action == true) {
        e.target.remove();
    }
};
document.getElementById("custompage").addEventListener("click", function() { click(event); });
