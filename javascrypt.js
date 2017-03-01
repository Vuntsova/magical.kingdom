$(document).ready(function() {
alert("Please play the game ONLY in FULL Screen with Audio ON")
//main random number
	var randNumber = 0;
//crystals 
	var green=0;
	var blue=0;
	var lightBlue=0;
	var yellow=0;
// total score
	var totalScore = 0;
// wins and losses
	var wins=1;
	for (var i = 0; i < wins.length; i++) {
		wins[i]
	}
	var losses=1;
	for (var i = 0; i < losses.length; i++) {
		losses[i]
	}
//Start Game
//fade in and out images
$("#story").delay(17000).fadeOut( 3000, function(){
});
$("#greenCrystal").delay(18500).fadeIn( 3600, function(){
});
$("#blueCrystal").delay(18500).fadeIn( 3600, function(){
});
$("#lightBlueCrystal").delay(18500).fadeIn( 3600, function(){
});
$("#yellowCrystal").delay(18500).fadeIn( 3600, function(){
});
$(".hey").delay(18500).fadeIn( 3400, function(){
});
$(".hi").delay(18500).fadeIn( 3400, function(){
});
$(".hey").delay(18500).fadeIn( 3400, function(){
});
$("#mainNumber").delay(18500).fadeIn( 3400, function(){
});

//random number function

	function randGenerator(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	randNumber = randGenerator(19,99);
	green = randGenerator(1,12);
	blue = randGenerator(1,12);
	lightBlue = randGenerator(1,12);
	yellow = randGenerator(1,12);


	$("#mainNumber").html(randNumber);

	function startGame(){
		randNumber = randGenerator(19,99);
		green = randGenerator(1,12);
		blue = randGenerator(1,12);
		lightBlue = randGenerator(1,12);
		yellow = randGenerator(1,12);
		totalScore=0;

		$("#mainNumber").html(randNumber);
	};

//onclick here
//green


var crystalList = ["#greenCrystal", "#blueCrystal", "#lightBlueCrystal", "#yellowCrystal"]




	$("#greenCrystal").click(function(){
		$("#greenCrystalVal").html(function(){
			totalScore += green;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					$("#lose").html(losses++);
					startGame();
				}

				else if(randNumber === totalScore){
					alert("you win");
					$("#win").html(wins++);
					startGame();
				};
		});		
	});
//blue
	$("#blueCrystal").click(function(){
		$("#blueCrystalVal").html(function(){
			totalScore += blue;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					$("#lose").html(losses++);					
					startGame();
				}

				else if(randNumber === totalScore){
					alert("you win")
					$("#win").html(wins++);
					startGame();
				};
		});
		//totalScore += blue;
	});
//lightBlue
	$("#lightBlueCrystal").click(function(){
		$("#lightBlueCrystalVal").html(function(){
			totalScore += lightBlue;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					$("#lose").html(losses++);					
					startGame();
				}

				else if(randNumber === totalScore){
					alert("you win")
					$("#win").html(wins++);
					startGame();
				};
		});
		//totalScore += lightBlue;
	});
//yellow
	$("#yellowCrystal").click(function(){
		$("#yellowCrystalVal").html(function(){
			totalScore += yellow;
			$("#total").html(totalScore);

				if(randNumber < totalScore){
					alert("you lose");
					$("#lose").html(losses++);					
					startGame();
				}

				else if(randNumber === totalScore){
					alert("you win")
					$("#win").html(wins++);
					startGame();
				};

		});
		//totalScore += yellow;
	});

		


});//$document.ready ends