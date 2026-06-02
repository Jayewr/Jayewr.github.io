const CENTER_X=getWidth() / 2;
const CENTER_Y=getHeight() / 2;
const RADIUS=120;
const FONT="48pt Arial";

let balls;
let number;


function main() {
    balls=ball(RADIUS,"red", CENTER_X, CENTER_Y);
    number=text("0", FONT, CENTER_X, CENTER_Y);
    setTimer(change, 100)
    mouseClickMethod(click);
    description();
}


function ball(radius, color, x, y) {
	let ball = new Circle(radius);
	ball.setPosition(x, y);
	ball.setColor(color)
	add(ball);
	
	return ball;
}

function text(text, font, x, y) {
    let num = new Text(text, font);
	num.setPosition(x - num.getWidth() / 2, y + num.getHeight() / 2);
	add(num);
	
	return num;
}




function change() {
    let change=Randomizer.nextInt(1, 70);
    number.setText(change);
}



function click(e) {
    stopTimer(change)
}

function description(){
    let text = new Text("It stops when you click it.", "20pt Arial");
    text.setPosition(50, 100);
    text.setColor("blue");
    add(text);
}

main();
