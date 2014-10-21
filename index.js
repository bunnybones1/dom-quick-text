function DomQuickText(str) {
	this.textElement = document.createTextNode(str);
	this.textElementDiv = document.createElement("div");
	this.textElementDiv.appendChild(this.textElement);
	document.body.appendChild(this.textElementDiv);
}

DomQuickText.prototype = {
	update: function(str) {
		this.textElement.replaceWholeText(str);
	}
}

module.exports = DomQuickText;