


//heirloom constants; should make another file for more of those soon
const Slots = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6];
const Modifiers = [
	["Player Efficiency", "Trainer Efficiency", "Storage Size", "Breed Speed", "Trimp Health", "Trimp Attack", "Trimp Block", "Crit Damage", "Crit Chance", "VMDC", "Plaguebringer", "Prismatic Shield", "Gamma Burst"],
	["Runestone Drop Rate", "Fire Trap Damage", "Strength Tower Effect", "Condenser Effect", "Poison Trap Damage", "Lightning Trap Damage"],
	["Metal Drop Rate", "Food Drop Rate", "Wood Drop Rate", "Gem Drop Rate", "Fragment Drop Rate", "Farmer Efficiency", "Lumberjack Efficiency", "Miner Efficiency", "Dragimp Efficiency", "Explorer Efficiency", "Scientist Efficiency", "Pet XP"]]
//list of all possible mods by type
const Rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Magnificent", "Ethereal", "Magmatic", "Plagued", "Radiating", "Hazardous"];
const ModifierUnlocks = [[10, 10, 10, 10, 10, 10, 10, 10, 11, 13, 12], [3, 5, 6, 6, 6, 6, 6], [11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12]];
const HeirloomValues =
	//oh god oh fuck this is an 3d Array :(
	//nvm, future me here, it's a goddamn 4D array
	//these borders are for type
	[
		//Shield
		[[["0.08", "0.16"], ["0.08", "0.16"], ["0.08", "0.16"], ["0.16", "0.32"], ["0.32", "0.64"], ["0.64", "1.28"], ["1.28", "2.56"], ["2.56", "5.12"], ["5.12", "10.24"], ["10.24", "20.48"], ["20.48", "40.96"]], [["0.1", "0.2"], ["0.1", "0.2"], ["0.1", "0.2"], ["0.2", "0.4"], ["0.4", "0.6"], ["0.6", "0.8"], ["0.8", "1"], ["1", "1.2"], ["1.2", "1.4"], ["", ""], ["", ""]], [["0.32", "0.64"], ["0.32", "0.64"], ["0.32", "0.64"], ["0.64", "1.28"], ["1.28", "2.56"], ["2.56", "5.12"], ["5.12", "7.68"], ["7.68", "10.24"], ["10.24", "12.8"], ["", ""], ["", ""]], [["0.05", "0.1"], ["0.05", "0.1"], ["0.05", "0.1"], ["0.1", "0.2"], ["0.7", "1"], ["1", "1.3"], ["1.3", "1.6"], ["1.6", "1.9"], ["1.9", "2.2"], ["2.2", "2.8"], ["2.6", "3.6"]], [["0.06", "0.2"], ["0.06", "0.2"], ["0.06", "0.2"], ["0.2", "0.4"], ["0.5", "1"], ["1", "1.5"], ["1.5", "2"], ["2", "2.6"], ["2.6", "3.56"], ["3.6", "4.6"], ["6", "7.5"]], [["0.06", "0.2"], ["0.06", "0.2"], ["0.06", "0.2"], ["0.2", "0.4"], ["0.5", "1"], ["1", "1.5"], ["1.5", "2"], ["2", "2.6"], ["2.6", "3.56"], ["3.6", "4.6"], ["6", "7.5"]], [["0.04", "0.07"], ["0.04", "0.07"], ["0.04", "0.07"], ["0.07", "0.1"], ["0.28", "0.4"], ["0.48", "0.6"], ["0.68", "0.8"], ["0.88", "1"], ["1.08", "1.2"], ["", ""], ["", ""]], [["0.4", "0.6"], ["0.4", "0.6"], ["0.4", "0.6"], ["0.6", "1"], ["1", "2"], ["2", "3"], ["3", "4"], ["4", "5"], ["5", "6.5"], ["6.5", "8.5"], ["8.5", "11"]], [["0.014", "0.026"], ["0.014", "0.026"], ["0.014", "0.026"], ["0.026", "0.05"], ["0.05", "0.074"], ["0.074", "0.098"], ["0.098", "0.122"], ["0.123", "0.159"], ["0.2", "0.3"], ["0.3", "0.5"], ["0.5", "0.8"]], [["0.05", "0.07"], ["0.05", "0.07"], ["0.05", "0.07"], ["0.08", "0.11"], ["0.12", "0.16"], ["0.17", "0.22"], ["0.24", "0.3"], ["0.32", "0.38"], ["0.4", "0.5"], ["0.5", "0.6"], ["0.05", "0.07"]], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["0.01", "0.15"], ["0.15", "0.3"], ["0.3", "0.45"]], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["0.1", "0.5"], ["0.1", "0.4"]], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["10", "20"], ["", ""]]],
		//Core
		[[["0.1", "0.25"], ["0.1", "0.25"], ["0.1", "0.25"], ["0.25", "0.5"], ["0.5", "1"], ["1", "1.99"], ["2", "4"]], [["0.1", "0.25"], ["0.1", "0.25"], ["0.1", "0.25"], ["0.25", "0.5"], ["0.5", "1"], ["1", "1.99"], ["2", "4"]], [["0.01", "0.1"], ["0.01", "0.1"], ["0.01", "0.1"], ["0.1", "0.2"], ["0.2", "0.5"], ["0.5", "1"], ["1", "1.99"]], [["", ""], ["0.01", "0.05"], ["0.01", "0.05"], ["0.05", "0.1"], ["0.05", "0.15"], ["0.1", "0.2"], ["0.2", "0.3"]], [["", ""], ["0.1", "0.25"], ["0.1", "0.25"], ["0.25", "0.5"], ["0.5", "1"], ["1", "1.99"], ["2", "4"]], [["", ""], ["", ""], ["0.01", "0.1"], ["0.1", "0.2"], ["0.2", "0.5"], ["0.5", "1"], ["1", "1.99"]]],
		//Staff
		[[["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["0.03", "0.06"], ["0.03", "0.06"], ["0.03", "0.06"], ["0.06", "0.12"], ["0.16", "0.4"], ["0.32", "0.8"], ["0.64", "1.6"], ["1.28", "3.2"], ["2.56", "6.4"], ["5.12", "12.8"], ["10.24", "25.6"]], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["0.25", "0.5"], ["0.5", "1"], ["0.75", "2"]]]

	];


//declaring some stuff so it can be used after being initialized in other functions
var Heirlooms;

function processingNeeded() {
	gNeedProcessing = true;
	setTimeout(function () {
		getHeirloomOptions();
	}, 1);
}


function getHeirloomOptions() {
	// Try to parse the save string
	var out1 = document.getElementById('out1');
	var saveString = document.getElementById('saveString');
	if (saveString == null) { out1.innerText = "huh"; return; }
	var game;
	try {
		var gameString = LZString.decompressFromBase64(saveString.value);
		game = JSON.parse(gameString);
	} catch (err) { }
	var selectorDivision = document.getElementById("selector");
	if (game != null) { selectorDivision.innerHTML = null; }


	//equipped looms
	Heirlooms = [game.global.ShieldEquipped, game.global.CoreEquipped, game.global.StaffEquipped];
	//looms in carry slots
	for (i = 0; i < game.global.heirloomsCarried.length; i++) {
		Heirlooms.push(game.global.heirloomsCarried[i]);
	}
	//looms that will DIE
	for (i = 0; i < game.global.heirloomsExtra.length; i++) {
		Heirlooms.push(game.global.heirloomsExtra[i]);
	}

	for (i = 0; i < Heirlooms.length; i++) {
		var button = document.createElement('button');


		var icon = document.createElement('span');
		var iconType = Heirlooms[i].icon;
		var icomoon = Heirlooms[i].icon[0] == "*";
		var prefix = "glyphicon glyphicon-";
		if (icomoon) {
			prefix = "icomoon icon-";
			iconType = iconType.substring(1);
		}
		iconType = prefix + iconType;
		icon.setAttribute('class', iconType);
		icon.innerText = " " + Heirlooms[i].name;

		button.setAttribute('onclick', "calc(" + i + ")");
		button.appendChild(icon);
		selectorDivision.appendChild(button);
		selectorDivision.appendChild(document.createElement('br'));

	}
}

function calc(heirloomNumber){

	var Heirloom = Heirlooms[heirloomNumber];
	var type = typeIndexer(Heirloom.type);
	var slots = Slots[Heirloom.rarity];
	var modTypes = [];
	var fromMax = [];
	var eval = [];
	for(var i = 0; i < slots; i++){
		modTypes.push(modIndexer(Heirloom.mods[i][0]));
		fromMax.push(Heirloom.mods[i][3]);
		var size = HeirloomValues[type][rarity][modTypes[i]];
		var size = 500;
		eval.push((size-fromMax[i])/size);
	}




}

function typeIndexer(type){
	switch(typeIndexer){
		case "Shield": return 0;
		case "Staff": return 2;
		default: return 1;
	}
}

function modIndexer(mod,type){
	var typeMods = Modifiers[type];
	for(var i = 0; i < typeMods.length; i++)
	{
		if(typeMods[i] == mod) return i;
	}
}














//random stuff
function stringify(array) {
	out = "[";
	for (var i = 0; i < array.length; i++) {
		out += " " + array[i].name;
	}
	return out + "]";
}
