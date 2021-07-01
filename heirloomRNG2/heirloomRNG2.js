
//declaring some stuff so it can be used after being initialized in other functions
var Heirlooms;
var HeirloomValues;
var heirloomButtons = [];

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
		heirloomButtons.push(button);
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

		button.addEventListener('click', calc.bind(null, i));
		button.addEventListener('click', changeButtonColors);
		button.appendChild(icon);
		selectorDivision.appendChild(button);
		selectorDivision.appendChild(document.createElement('br'));

	}
}

function calc(heirloomNumber) {

	var Heirloom = Heirlooms[heirloomNumber];
	var type = Heirloom.type;
	var slots = Heirloom.mods.length;
	var rarity = Heirloom.rarity;
	var eval = [];

	var resultDivision = document.getElementById("results");
	resultDivision.innerHTML = null;
	var totalRating = 0;
	var totalChange = 1;
	var upgradeCount = 0;
	var slotDec = 0;

	for (var i = 0; i < slots; i++) {
		var fromMax = Heirloom.mods[i][2];
		upgradeCount += fromMax;
		var mod = Heirloom.mods[i][0];
		console.log(mod);
		if (mod != "empty") {
			var bigSteppy = HeirloomStats[type][mod]["steps"];

			if (bigSteppy === undefined) {
				bigSteppy = HeirloomStats.defaultSteps;
			}

			bigSteppy = bigSteppy[rarity];

			var max = bigSteppy[1];
			var min = bigSteppy[0];

			var stepSize = bigSteppy[2];
			var stepCount = (max - min) / stepSize + 1;
			var rating = (stepCount - fromMax) / stepCount;

			var resI = document.createElement('p');
			resI.innerText = "Drop quality of mod " + mod + ": " + uglyfy(rating);
			var linebreak = document.createElement('br');
			resultDivision.appendChild(resI);
			resultDivision.appendChild(linebreak);

			totalRating += rating;
			totalChange *= (1 + fromMax) / stepCount;
		}
		else {
			slotDec++;
		}


	}
	slots = slots - slotDec;

	var resR = document.createElement('p');
	resR.innerText = "Quality of all mods: " + uglyfy(totalRating / slots);
	var linebreak1 = document.createElement('br');
	resultDivision.appendChild(resR);
	resultDivision.appendChild(linebreak1);

	var resC = document.createElement('p');
	resC.innerText = "Chance to find an heirloom with better or equal stats: " + uglyfy(totalChange);
	var linebreak2 = document.createElement('br');
	resultDivision.appendChild(resC);
	resultDivision.appendChild(linebreak2);

	var resU = document.createElement('p');
	resU.innerText = "Ammount of Upgrades required to softcap: " + upgradeCount;
	var linebreak3 = document.createElement('br');
	resultDivision.appendChild(resU);
	resultDivision.appendChild(linebreak3);
}


function uglyfy(floaty) {
	floaty = (Math.floor(floaty * 10000) / 100) + "%";

	return floaty;
}


//random stuff
function stringify(array) {


	out = "[";
	for (var i = 0; i < array.length; i++) {
		out += " " + array[i].name;
	}
	return out + "]";
}


function changeButtonColors(event) {
	// Reset all buttons and change color of the selected one.
	var selected = event.target.nodeName !== "SPAN" ? event.target : event.target.parentElement;
	heirloomButtons.forEach(button => {
		button.style.backgroundColor = null;
	});
	selected.style.backgroundColor = "rgb(255, 255, 200)";
}

