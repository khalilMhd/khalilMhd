let name = "khalil";
console.log(name.length)

function age (myage) {
    if (myage > 18) {
        return "you are teenager";
    }
    else {
        return "you are adult";
    }
}
console.log(age(15));

let birth = ("2008");
let year = ("2022")
let age = year - birth;
console.log(age);

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "maroc"
let discountAmount_1 = 10;

if (discount === true) {
    price -= discountAmount;
}
else if (country === "maroc") {
    price -= discountAmount_1;
}

console.log(discountAmount);


var bubble = {

    x: 300,
    y: 200,
}

function setup () {
    creatCanvas(600, 400);
}

function draw () {
    background(0);
    move();
    display();
}

function display() {
    stroke(255);
    strokeWeight(4),
    noFill();
    ellipse(bubble.x.y, 24,24);
}

document.getElementById("text").innerHTML = 5
let text = 5


function increment () {
    console.log("button was clicked")

}
