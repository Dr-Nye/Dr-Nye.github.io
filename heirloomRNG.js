


//heirloom constants; should make another file for more of those soon
const Slots = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6];
const modifiers = [
	["Player Efficiency","Trainer Efficiency","Storage Size","Breed Speed","Trimp Health","Trimp Attack","Trimp Block","Crit Damage","Crit Chance","VMDC","Plaguebringer","Prismatic Shield","Gamma Burst"],
	["Runestone Drop Rate", "Fire Trap Damage", "Strength Tower Effect", "Poison Trap Damage", "Condenser Effect", "Lightning Trap Damage"],
	["Metal Drop Rate", "Food Drop Rate", "Wood Drop Rate", "Gem Drop Rate", "Fragment Drop Rate","Farmer Efficiency","Lumberjack Efficiency","Miner Efficiency","Dragimp Efficiency","Explorer Efficiency","Scientist Efficiency","Pet XP"]]
	 //list of all possible mods by type
const Rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Magnificent", "Ethereal", "Magmatic", "Plagued", "Radiating", "Hazardous"];
const ModifierUnlocks = [[10, 10, 10, 10, 10, 10, 10, 10, 11, 13, 12], [3, 5, 6, 6, 6, 6, 6], [11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12]];

//selection default element
const selectPlox = document.createElement('option');
selectPlox.value = 0;
selectPlox.label = "select Plox";

//declaring some stuff so it can be used after being initialized in other functions
var slots = 0;
var type = 0;
var bl = [-1, -1, -1, -1, -1, -1];
var rarity = 0;
var inputs = [0, 0, 0, 0, 0, 0];



function selectType() {

	type = document.getElementById("types").value;
	const out = document.getElementById("rarity");

	// -ethereal for core, hazardous else
	const rars = 10 - 4 * (type == 2);

	//empties list and generates default element
	out.innerHTML = null
	out.appendChild(selectPlox);

	//creates rarity options
	for (var i = 0; i < rars + 1; i++) {
		const option = document.createElement('option');
		option.value = i;
		option.label = Rarities[i];
		out.appendChild(option);
	}
}

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
	slots = Slots[rarity];

	//creates #Slots ammount of mod selectors
	for (var i = 0; i < slots; i++) {
		const select = document.createElement('select');
		select.label = "modSelector" + i;
		select.name = "modSelector" + i;
		select.setAttribute("onchange", "selectMods(" + i + ")")
		select.id = "modSelector" + i;
		optionate(select, bl, modifiers[type - 1].slice(0, ModifierUnlocks[type-1][rarity]));
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

//lib adds options to selector
function optionate(node, bl, source) {
	for (var j = 0; j < source.length; j++) {
		const option = document.createElement('option');
		if (!bl.includes(j + "")) {
			option.value = j;
			option.label = source[j];
			node.appendChild(option);
		}
	}
}

//called from mod selector
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

function writeInput(count) {
	inputs[count] = document.getElementById("entry" + count).value;
	document.getElementById("test").innerText = inputs[count];
}

function calc() {

}



















//testing
function stringify(array) {
	out = "[";
	for (var i = 0; i < array.length; i++) {
		out += " " + array[i];
	}
	return out + "]";
}

