function DomQuickText(str) {
	this.textElement = document.createTextNode(str);
	this.textElementDiv = document.createElement("div");
	this.textElementDiv.appendChild(this.textElement);
	document.body.appendChild(this.textElementDiv);
}

DomQuickText.prototype = {
	update: function(str) {
		console.log('wtf');
		this.textElement.textContent = str;
	}
}

module.exports = DomQuickText;