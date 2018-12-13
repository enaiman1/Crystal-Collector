// when page loads this code will be executed
$(document).ready(function(){

    //    creating new variable
    var specialNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var blue;
    var clear;
    var green;
    var red;
    
// creating an object for when a new game starts
    function newNumber() {
        
        // cpu picks random number (19 and 120)
        specialNumber = Math.floor((Math.random()*120)+19)
        // console.log (specialNumber);

        // setting random value for gems (between 1 - 12)
        blue = Math.floor(Math.random()*12+1);
        clear = Math.floor(Math.random()*12+1);
        green = Math.floor(Math.random()*12+1);
        red = Math.floor(Math.random()*12+1);

        // console.log(blue, clear, green, red);
        
    }
// when a new game starts - special number and gem randomly picks a new number
    function newGame () {
        newNumber();
        totalScore = 0;
        $("#specialNumber").text(specialNumber);
        $("#totalScore").text(totalScore);
        $("#sapphire").attr("data-gemvalue", blue);
        $("#diamond").attr("data-gemvalue", clear);
        $("#emerald").attr("data-gemvalue", green);
        $("#ruby").attr("data-gemvalue", red);
        

    }
    // if you win - win column will increments by one and total score goes back to 0
    function youWin() {
        wins++;
        $("#wins").text(wins);
        totalScore = 0;
        newGame();
    }
    // if you lose - column will increments by one and total score goes back to 0
    function youLose() {
        losses++;
        $("#losses").text(losses);
        totalScore = 0;
        newGame();
    }

    newGame();
    // ever time the mouse button hovers over the gem it will fade (due to opacity)
    $(".gemImg").hover(function() {
        $(this).css({opacity: 0.3});
    },
    // when you move the mouse off, it goes back to its original opacity
        function() {
            $(this).css({opacity: 1});
        });
    
    
    // when you click the gem store the value as a string
    $(".gemImg").on("click", function() {
        var gemValue = $(this).attr("data-gemvalue");
        
        // the string is then converted to a number
        gemValue = parseInt(gemValue);
        
        
        // score depends on the random gemValue
        totalScore = totalScore + gemValue;
        $("#totalScore").text(totalScore);
        
        // if else statement to dictate if you win or lose
        // to win score has to equal the random computer generated number
        if (totalScore === specialNumber) {
            youWin();
            // if the total score is greater then the computer generate number, you lose
        } else if (totalScore > specialNumber) {
            youLose();
        }
    });

    // when button is clicked the instructions disapper and game board appears
    // when button is click the word "start" changes to "restart"
    $(".btn").on("click", function() {
        console.log("button clicked")
        newGame();
        $(".gameBoard").slideDown();
        $("#instruction").slideUp();
        $(".startButton").text("Restart");
        
    });


    
    
    
    




}); //end of code block