//Insert here the question number of the "Question were the Points should be displayed"
var PointScreen = 60;


//Ignore! Just for the math
var score = 1;
var points = 0;

//Go
document.getElementById("go").onclick = function() {
    document.getElementById("go").style.display="none";
    document.getElementById("question"+score).style.display="block";
	document.getElementById("DevCodes").style.display="none";
	document.getElementById("Entwicklermist").style.display="none";
};

//Check Answers
function rightAnswer (el){
	$ (".right").css("color","#61D134");
	$ (".wrong").css("color","#ED184A");
    setTimeout(function(){
    	$ (".right").css("color","#000000");
		$ (".wrong").css("color","#000000");
    	document.getElementById("question"+score).style.display="none";
    	score++;
    	points++;
    	console.log(score);
    	document.getElementById("question"+score).style.display="inline";
    	}
    ,1250);
}

function wrongAnswer (el){
	$ (".right").css("color","#61D134");
	$ (".wrong").css("color","#ED184A");
	setTimeout(function(){
    	$ (".right").css("color","#000000");
		$ (".wrong").css("color","#000000");
    	document.getElementById("question"+score).style.display="none";
    	score++;
    	console.log(score);
    	document.getElementById("question"+score).style.display="inline";
    	}
    ,750);
}
//See Points
document.getElementById("seePoints").onclick = function () {
	if (score == PointScreen) {
		document.getElementById("seePoints").style.display="none";
		window.alert("Du hast " + points + " von " + score + "Fragen richtig beantwortet.");
		document.getElementById("backHome").style.display="block";
	};
};

//Cheats
function showCheats () {
	console.log("Ihr wollt mich doch verarschen!");
	document.getElementById("DevCodes").style.display="block";
	document.getElementById("Entwicklermist").style.display="none";
};

function checkTheCode (){
	var pointsWish = document.getElementById("pointsWish").value;
	var questionWish = document.getElementById("questionWish").value;
	var checkCode = document.getElementById("checkCode").value;
	if (checkCode == 31415926) {
		document.getElementById("question"+questionWish).style.display="block";
		document.getElementById("go").style.display="none";
		document.getElementById("DevCodes").style.display="none";
		score = questionWish;
		points = pointsWish;
		console.log(score);
	}
};