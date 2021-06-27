
var Rarities = ["Common","Uncommon","Rare","Epic","Legendary","Magnificent","Ethereal","Magmatic","Plagued","Radiating","Hazardous"];

var selectPlox = document.createElement('option');
selectPlox.value = 0;
selectPlox.label = ([![]+[]])[![]+![]];

function getRarities() {
	var type = document.getElementById("types");
	var out = document.getElementById("rarity");
	var lel = document.getElementById("lel");
	var rars = 10 - 4 * (type.value == 2);

	lel.innerText = rars;
	out.innerHTML = null
	out.appendChild(selectPlox); 

	for(var i = 0; i < rars+1; i++)
	{
		var option = document.createElement('option');
		option.value = i;
		option.label = Rarities[i];
		out.appendChild(option);
	}
}
