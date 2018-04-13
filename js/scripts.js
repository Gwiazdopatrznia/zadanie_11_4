function Phone(brand, from, price, color, weight) {
	this.brand = brand;
	this.from = from;
	this.price = price;
	this.color = color;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + " from " + this.from + ", color is " + this.color + ", weight is " + this.weight + " g" + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", "South Korea", 899, "blue", 138);
var iPhone6S = new Phone("Apple", "United States", 2250, "silver", 143);
var onePlusOne = new Phone("OnePlus", "China", 1499, "black", 162);

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
