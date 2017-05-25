$(document).ready(function(){

//this chooses the random number 
	var random = Math.floor(Math.random()*150+12);			
	document.getElementById("randomnumber").innerHTML=random;



//shows in HTML
	$('#randomNumber').text(random);

//variables I used for the functions 
	var generatedNumber = [];
	var score = 0;
	var wins = 0;
	var losses = 0;

var star = 1, toad = 5, bowser = 10, yoshi = 25;
//for loop to generate the random number(s)
	/*function randomNumber (){
		for (var i = 0; i < 4; i++){
			//this will select a random number between 1 and 14
			var count = Math.floor(Math.random()*13)+ 1;
			console.log(randomNumber);
		}
	}

randomNumber();*/

//clicks for each character 

function wins(){
	alert("wins");
}


function losses(){
	alert("losses");

}

 $("#star").click(function(){
 	score = score + star;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if (score === random){
 			wins();
 		}

 		else if (score > random){
 			losses();
 		}
 		 		
 	})

 $("#toad").click(function(){
 	score = score + toad;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if ( score === random){
 			wins();
 		}

 		else if (score > random){
 			losses();
 		}

 })

 $("#bowser").click(function(){
 	score = score + bowser;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;
 	
 		if ( score === random){
 			wins();
 		}

 		else if (score > random){
 			losses();
 		}

 })

 $("#yoshi").click(function(){
 	score = score + yoshi;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if ( score === random){
 			wins();
 		}

 		else if (score > random){
 			losses();
 		}

 	})



});