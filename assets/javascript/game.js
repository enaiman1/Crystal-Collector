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
        // specialNumber = Math.floor(Math.random()*110 + 19);
        specialNumber = Math.floor((Math.random()*110)+19)
        console.log (specialNumber);

        // setting random value for gems (between 1 - 12)
        blue = Math.floor(Math.random()*12+1);
        clear = Math.floor(Math.random()*12+1);
        green = Math.floor(Math.random()*12+1);
        red = Math.floor(Math.random()*12+1);

        console.log(blue, clear, green, red);
        
    }

    function newGame () {
        newNumber();
        userTotal = 0;
        $("#specialNumber").text(specialNumber);
        $("#totalScore").text(totalScore);
        $("#sapphire").attr("data-gemvalue", blue);
        $("#diamond").attr("data-gemvalue", clear);
        $("#emerald").attr("data-gemvalue", green);
        $("#ruby").attr("data-gemvalue", red);

    }

    function youWin() {
        $("#winOrlose").text("Bravo!!");
        wins++;
        $("#wins").text(wins);
        totalScore = 0;
        newGame();
    }
    function youLose() {
        $("#winOrlose").text("Sorry Try again");
        losses++;
        $("#losses").text(losses);
        totalScore = 0;
        newGame();
    }

    newGame();

    $(".gemImg").hover(function() {
        $(this).css({opacity: 0.3});
    },
        function() {
            $(this).css({opacity: 1});
        });
    
    
    
    $(".gemImg").on("click", function() {
        var gemValue = $(this).attr("data-gemvalue");
        console.log($(this));
        gemValue = parseInt(gemValue);
        console.log(typeof gemValue);
        

        totalScore = totalScore + gemValue;
        console.log(totalScore);
        $("#totalScore").text(totalScore);
        
        if (totalScore === specialNumber) {
            youWin();
        } else if (totalScore > specialNumber) {
            youLose();
        }
    });

    $(".btn").on("click", function() {
        newGame();
    });


    
    
    
    




}); //end of code block