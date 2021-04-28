//function for start button
function start(){
document.getElementById("startButton").disabled = true;
document.getElementById("stopButton").disabled = false;
}
//function for stop button
function stop(){
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function playCode(){
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
//to play any sound
function sound(src){ 
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);


    this.play = function(){
        this.sound.play();
    }
    
    this.stop = function(){
        this.sound.pause();
    }
}



//same function made more efficient with loops
function countDownV3() {
    //creating variable for the count starting at 10
    var count = 10;
    //creating loop for iderations of each count down number. first 1 then +1 for each being = or less than 10
    for (var i = 1; i <= 10; i++) {

//begin showing countdown
        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
                // 1000 milliseconds times the number of iderations
            }, 1000 * i);
//show the countdown is half way through
        } else if(i>5 && i!=11){
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
//show blastoff at end of countdown
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "BLASTOFF!!!"
                count--;
            }, 1000 * i);
        }

    }
    //Display blastoff afer 11000 milliseconds 
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count--;
    }, 11000);
}


function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create sum of die1 and die2 variable
    var sum;
    //make die1 roll between 0-6 and round up for whole numbers
    die1 = Math.ceil(Math.random() * 6);
    //make die2 roll between 0-6 and round up for whole numbers
    die2 = Math.ceil(Math.random() * 6);
    //create sum formula
    sum = die1 + die2;
    //show rolled die1 value
    document.getElementById("die1Res").innerHTML = die1;
    //show rolled die2 value
    document.getElementById("die2Res").innerHTML = die2;
    //show rolled sum of die1 and 2 value
    document.getElementById("sumRes").innerHTML = sum;
    //lose if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        //show that user has lost
        document.getElementById("crapsResults").innerHTML = "Craps You Lose!";
    }
    //win if die 1 and 2 are the same and they are even (%2=0 means it divides by 2 and has no remainder=even)
    else if (die1 == die2 && die1 % 2 == 0) {
        //show that user rolled even doubles and won
        document.getElementById("crapsResults").innerHTML = "Doubles, YOU WIN!!!";
    }
    //else means if none of the previous if statements are true
    else {
        //Allow user to play again if you get none of the previous results
        document.getElementById("crapsResults").innerHTML = "Push, please try again.";

    }

}

function runSandbox() {

    var count = 10;
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!!!";
        count--;
    }, 11000);
}

