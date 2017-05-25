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

//clicks for each character 

function win(){
	reset();
	wins++;
	document.getElementById("scorewins").innerHTML=wins;


}


function loss(){
	reset();
	losses++;
	document.getElementById("scorelosses").innerHTML=losses;

}


 $("#star").click(function(){
 	score = score + star;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if (score === random){
 			win();
 		}

 		else if (score > random){
 			loss();
 		}
 		 		
 	})

 $("#toad").click(function(){
 	score = score + toad;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if ( score === random){
 			win();
 		}

 		else if (score > random){
 			loss();
 		}

 })

 $("#bowser").click(function(){
 	score = score + bowser;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;
 	
 		if ( score === random){
 			win();
 		}

 		else if (score > random){
 			loss();
 		}

 })

 $("#yoshi").click(function(){
 	score = score + yoshi;
 	console.log("new score=" + score);
	document.getElementById("userscore").innerHTML=score;

 		if ( score === random){
 			win();
 		}

 		else if (score > random){
 			loss();
 		}

 	})

function reset(){
	random = Math.floor(Math.random()*150+12);			
	document.getElementById("randomnumber").innerHTML=random;
	score = 0;

}

});