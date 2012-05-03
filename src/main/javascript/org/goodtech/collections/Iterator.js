/**
 * Iterate over the elements in an array or a map.
 */
var Iterator = function (input) {
	this.iterableList = [];
	var type;
	if (typeof input === "array") {
		type = "LIST";
	}
	else if (typeof input === "object") {
		type = "MAP";
	}
	
	if (type == "MAP") {
		for (entry in input) {
			if (input.hasOwnProperty(entry)) {
				this.iterableList.push({entry:input[entry]});
			}
		}
	}
	else {
		for (var entryIndex = 0, limit = input.length; entryIndex < limit; entryIndex += 1) {
			this.iterableList.push(input[entryIndex]);
		}
	}
	delete type;
}

Iterator.prototype = {
	next: function () {
		return this.iterableList.shift();
	},
	hasNext: function () {
		return (this.iterableList.length > 0);
	}
}