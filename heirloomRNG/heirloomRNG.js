


//heirloom constants; should make another file for more of those soon
const Slots = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6];
const modifiers = [
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
var slots = 0;
var type = 0;
var bl;
var rarity = 0;
var inputs = [0, 0, 0, 0, 0, 0];


//handles updates on selecting type
function selectType() {

	type = document.getElementById("types").value;
	const out = document.getElementById("rarity");

	// -ethereal for core, hazardous else
	const rars = 10 - 4 * (type == 2);

	//makes rarity dropdown
	out.innerHTML = null
	optionate(out,[],Rarities);

}

//handles updates on selecting rarity
function selectRarity() {
	const modDivision = document.getElementById("modifierSelectors");
	const inputDivision = document.getElementById("input");


	//kills old selectors
	for (var i = 0; i < slots; i++) {
		modDivision.removeChild(document.getElementById("modSelector" + i));
		inputDivision.removeChild(document.getElementById("entry" + i));
	}

	//gets new selector count
	rarity = document.getElementById("rarity").value;

	if (rarity > 8 && type == 1) { bl = [-1, -1, -1, -1, -1, -1, "1", "2", "6"]; }
	else { bl = [-1, -1, -1, -1, -1, -1]; }


	slots = Slots[rarity];

	//creates #Slots ammount of mod selectors
	for (var i = 0; i < slots; i++) {
		const select = document.createElement('select');
		select.label = "modSelector" + i;
		select.name = "modSelector" + i;
		select.setAttribute("onchange", "selectMods(" + i + ")")
		select.id = "modSelector" + i;

		optionate(select, bl, modifiers[type - 1].slice(0, ModifierUnlocks[type - 1][rarity]));
		modDivision.appendChild(select);
	}

	//creates #Slots ammount of entry fields
	for (var i = 0; i < slots; i++) {
		const input = document.createElement('input');
		input.type = "text";
		input.id = "entry" + i;
		input.setAttribute("oninput", "writeInput(" + i + ")");
		inputDivision.appendChild(input);
	}


}

//adds options (names in source) to node with elements with index in BL being skipped
function optionate(node, bl, source) {
	const def = document.createElement('option');
	def.label = "select Plox";
	def.value = -1;
	node.appendChild(def);
	for (var j = 0; j < source.length; j++) {
		const option = document.createElement('option');
		if (!bl.includes(j + "")) {
			option.value = j;
			option.label = source[j];
			node.appendChild(option);
		}
	}
}



//updates remainder of options on selecting a modifier
function selectMods(count) {
	const selection = document.getElementById("modSelector" + count).value;

	//blacklists current value
	bl[count] = selection;

	//filters each following selector
	for (i = count + 1; i < slots; i++) {
		selector = document.getElementById("modSelector" + i);
		selector.innerHTML = null;
		optionate(selector, bl, modifiers[type - 1]);
	}
}


//saves values from text fields into storage
function writeInput(count) {
	inputs[count] = document.getElementById("entry" + count).value;
}



function calc() {

	out1 = document.getElementById("out1");
	out2 = document.getElementById("out2");


	var results = [];
	for (var i = 0; i < slots; i++) {

		var val = HeirloomValues[type - 1] 	//first D: Heirloom Type
		[bl[i]]		//second D: Modifier
		[rarity]; 	//third D: Rarity
		const min = val[0];			//4th D: min / max
		const max = val[1];
		const qual = (inputs[i] - min) / (max - min);
		if (inputs[i] != 0) {
			results.push(qual);
		}
	}
	out1.innerText = stringify(results);
	var tqual = 0;
	for (var i = 0; i < results.length; i++) { tqual += results[i]; }
	tqual /= results.length;
	out2.innerText = tqual;

}

function pasteSave()
{
	var game;
	try {
	  game = JSON.parse(LZString.decompressFromBase64(document.getElementById("saveString").value));
	} catch(err) {}
	var Heirlooms = [game.global.ShieldEquipped,game.global.CoreEquipped,game.global.StaffEquipped];
	for(i = 0; i < game.HeirloomsCarried.length; i++)
	{
		Heirlooms.push(game.HeirloomsCarried[i]);
	}
	
	for(i = 0; i < game.HeirloomsExtra.length; i++)
	{
		Heirlooms.push(game.HeirloomsExtra[i]);
	}
}
















//random stuff
function stringify(array) {
	out = "[";
	for (var i = 0; i < array.length; i++) {
		out += " " + array[i];
	}
	return out + "]";
}

