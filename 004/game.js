var health, potato, potatoRate, peasant, peasantCost, combine, combineCost, eatCost, politburoFavor, rouble;

function updateCounter(countName, variableName) {
	document.getElementById(countName).innerHTML = variableName;
}

function displayElement(elementName, displayStyle) {
	document.getElementById(elementName).style.display = displayStyle;
}

function starvation() {
	if (health > 0) {
		health--;
		updateStats();
	}
	else {
		alert("Potato and big business only hallucination of malnourish.\nLatvian peasant die in sadness.");
		location.reload();
	}	
}

function potatoPicking() {
	potato += peasant * potatoRate;
	updateStats();
		if (potato >= 10){
			displayElement("eat-potato", "inline");}
		if (potato >= 500){
			displayElement("add-peasant", "inline");
			displayElement("eatCost-counter", "block");
			displayElement("peasant-counter", "block");
			displayElement("peasantCost-counter", "block");}
		if (potato >= 1500){
			displayElement("add-combine", "inline");
			displayElement("combine-counter", "block");
			displayElement("combineCost-counter", "block");}
		if (potato >= 25000) {
			updateStats();
			alert("When have many potato politburo come.\nPolitburo say \"Give transfer rouble and politburo not see capitalist-imperialist activity in kolkhoz\".\nBut transfer rouble not of implement in version 0.04.\nPolitburo execute kolkhoz and burn potato.\nPolitburo uncorruptable.");
			location.reload();}
}

function updateStats() {
	updateCounter("health-count", health);
	updateCounter("potato-count", potato);
	updateCounter("eatCost-count", eatCost);
	updateCounter("peasant-count", peasant);
	updateCounter("peasantCost-count", peasantCost);
	updateCounter("combine-count", combine);
	updateCounter("combineCost-count", combineCost);
}

function digPotato() {
    potato += potatoRate;
	updateStats();
}

function eatPotato() {
	if (potato >= eatCost && health <= 95) {
		potato -= eatCost;
		health += 5;
		updateStats();
	}
	else if (potato >= eatCost && health > 96) {
		potato -= eatCost;
		health = 100;
		updateStats();
	}
	else {
		updateStats();
	}
}

function addPeasant() {
	if (potato >= peasantCost) {
		peasant++;
		potato -= peasantCost;
		peasantCost = Math.ceil(peasantCost * 1.1);
		eatCost = 10 + 10 * peasant;
		updateStats();
	}
	else{
		updateStats();
	}

}

function addCombine() {
	if (potato >= combineCost && peasant >= 10 && peasant >= 10 + 10 * combine) {
		combine++;
		potato -= combineCost;
		combineCost = Math.ceil(combineCost * 1.1);
		//potatoRate = 5 + 5 * combine;
		potatoRate = 5 + combine;
		updateStats();
	}
	else{
		updateStats();
	}
}

document.getElementById("add-potato").onclick = function() {digPotato()};
document.getElementById("eat-potato").onclick = function() {eatPotato()};
document.getElementById("add-peasant").onclick = function() {addPeasant()};
document.getElementById("add-combine").onclick = function() {addCombine()};

window.onload = function game () {
	potato = 0;
	health = 10;
	peasant = 0;
	peasantCost = 100;
	combine = 0;
	combineCost = 5000;
	eatCost = 10;
	potatoRate = 5;
	rouble = 0;
	politburoFavor = 50;
	updateStats();
	window.setInterval (function() {
		starvation();
		potatoPicking();
	}, 1000);
}