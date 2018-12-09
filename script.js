 document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '</div id = "helloText">нажмите клавишу enter чтобы начать иру</div>' );
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = "center";
helloText.style.frontSize = 72 + "pt" ;

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div');//points
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAling = "center";
scoreObj.style.frontSize = 72 +"pt";
scoreObj.style.display= 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');//orange
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
scoreObj.style.display= 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');//pig
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
scoreObj.style.display= 'none';

document.getElementByIdTagName ('body')[0].insertAdjacentHTML('beforeEnd', '<div id ="timerObj"></div>');
timerObj.style.textAling = "center";
timerObj.style..frontSize =72+"pt";
timerObj.style.display = 'none'

var timer = 15 ;
var intervalId

var mouseListener = function (event){mouseMoveFunc(event)};
var enterLIstner = function(event) {startGame(event)};


function startGame (event){
	if (event.keyCode == 13){
		score = 0;
		setScore(0);

		timerObj.style.display = "block";
		helloText.style.display ="none";
		scoreObj.style.display = 'block';
		orange.style.display = 'block';
		pig.style.display = 'block';
		document.removeEventListener('keydown',eventerListener);
		document.addEventListener("mousemove", mouseListener);
		intervalId = setInterval(function(){cntdwn();},1000);

		spawnOrange();
	}
}

function setTimer(timeToSet){
	console.log (timer);
	timerObj.innerHTML ="время:"+timeToSet;
}

function mouseMoveFunc(event){
	pig.style.left=event.clientX -64 + 'px';//x
	pig.style.top=event.clientY -64 + 'px';//y
	checkCollision();
	if (pig.style.top >= 50 ) {
		pig.style.top=event.clientY 364-64 + 'px';
		if (pig.style.top <= 300 ) {


		}
	}
function cntdwn (){
	timer-=1;
	setTimer(timer);
}

}
function checkCollision(){
	console.log();
	 if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+ Math.pow(pig.offsetTop - orange.offsetTop,2)) <128)
	 {
	 	spawnOrange();
	 	score+=5;
	 	setScore(score);      

	 }
}


//spawnOrange();
function spawnOrange (){
	orange.style.left=Math.random()*(window.innerWidth -128) + 'px';
	orange.style.top=Math.random()*(window.innerHeight -128) + 'px';
}
 
 function setScore(scoreToSet){
 	scoreObj.innerHTML = "Очки: "+scoreToSet;
 }

	document.addEventListener("keydown",addEventListener);
//document.addEventListener("mousemove", mouseListener);