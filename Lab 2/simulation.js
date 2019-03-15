
// Requirement 11, 12: Visible variable and changes
// I have two variables in this game.
// One is interactors' health condition.
// The other is the remaining days.

var health = 100;
var day = 3;
var state = 0;


$(document).ready(function () {


    $("#start").click(function () {
        $("#start").remove();
        update();
        $("#selection").append("<div class='button'><a href='#' id='btn1' >123</a></div>");
        $("#selection").append("<div class='button' id='second'><a href='#' id='btn2' >123</a></div>");
        state1();

        // Requirement 7, 8: Modify variables
        // Two buttons for making choices.
        // The choices can influence the health points and the remaining days.

        $("#btn1").click(function () {
             if (state === "Killed by monsters" || state === "Starve to death" || state === "Survive"  ) {
                 location.reload();
             }
            
             if (state === "Day 3") {
                health = 0;
                day = day - 1;
                update();
                $("#feedback").text("")
                endState1();
            }
            
             if (state === "Day 2") {
                health = health - 40;
                day = day - 1;
                update();
                $("#feedback").text("There were some beasts in the cave. They attacked you and you tried your best to run away. Finally you climbed on the coconut tree and the beasts left. But you were hurt. You lost 40 in health.")
                state3();
            }
            
            if (state === "Day 1") {
                health = health - 10;
                day = day - 1;
                update();
                $("#feedback").text("You searched by the sea for a whole day trying to catch some fish or find shells. You found nothing. You lost 10 in health.")
                state2();
            }
            
        })

        $("#btn2").click(function () {
            if (state === "Day 3") {
             if (health < 60) {
                health = 0;
                day = day - 1;
                update();
                $("#feedback").text("")
                endState2();
             }
                else {
                day = day - 1;
                update();
                $("#feedback").text("")
                endState3();
                }
               
            }
            
              if (state === "Day 2") {
                health = health - 10;
                day = day - 1;
                update();
                $("#feedback").text("You walked by the woods but just caught a squirrel. You remembered your pet and decided to release it. You found some nuts but they were not enough for you. You lost 10 in health.")
                state3();
            }
            
            if (state === "Day 1") {
                health = health - 30;
                day = day - 1;
                update();
                $("#feedback").text("You climbed on the tree to get the coconut because you were so thirsty. However, you were not an experienced climber and accidentally fell off the tree. You lost 30 in health.")
                state2();
            }
            
        })

    })

})

function update() {
    $("#health").text("Health: " + health);
    $('#time').text('Remaining days: ' + day);
}


// Requirement 13: Must display current state of values in console
// Please check the console.

// State 1 describes the situation on the first day.
function state1() {
    state = "Day 1";
   console.log("-------Current State: " + state + "-------");
    console.log("Health: " + health);
    console.log("Remaining days: " + day)
    $('#story').text("In order to survive, the first thing you need to do is to find something to eat and drink! You saw some coconuts on the tree but it was really tall. You may also want to catch fish in the sea or find some shells by the beach?")
    $('#btn1').text("Walk by the sea");
    $('#btn2').text("Climb the tree");
}

// State 2 describes the situation on the second day.
function state2() {
    state = "Day 2";
    console.log("-------Current State: " + state + "-------");
    console.log("Health: " + health);
    console.log("Remaining days: " + day)
    $('#story').text("It's the second day on the island. You still need to find something to eat. Last night, you heard some weird sounds from a cave nearby. There might be some animals as your food in it. And it was a good shelter. But it could also be dangerous. What do you plan to do?")
    $('#btn1').text("Go into the cave");
    $('#btn2').text("Go hunting in other places");
}

// State 3 describes the situation on the third day.
function state3() {
    state = "Day 3";
    console.log("Current State: " + state);
    console.log("Health: " + health);
    console.log("Remaining days: " + day);
    $('#story').text("Today you heard people talking. Great! People's voices! You were not insane. But you didn't see them. You knew they might be hiding in the woods. Do you want to go there and have a look?")
    $('#btn1').text("Go and check");
    $('#btn2').text("Stay here"); 
}

// Requirements 10: Different outcomes
// I designed three different end states based on interactors' choices
// Three of them all used narrative to describe scenarios

// End state 1 will be triggered if interactors choose "GO!!!" on the third day.
function endState1() {
    state = "Killed by monsters";
   console.log("-------End State: " + state + "-------");
    console.log("Health: " + health);
    console.log("Remaining days: " + day);
     $('#story').text("When you reached the source of the voices, you saw some human-like shadows. But when you approached closer, you found these 'people' had a human upper body and a lion lower body. They were so angry to see you because they thought you disturbed their quiet life. They surrounded you and killed you brutally.")
    $('#btn1').text("Replay");
    $('#second').hide(); 
}

// End state 2 will be triggered if interactors choose "Stay here" on the third day AND their health is lower than 60.
function endState2() {
    state = "Starve to death";
  console.log("-------End State: " + state + "-------");
    console.log("Health: " + health);
    console.log("Remaining days: " + day);
     $('#story').text("You chose to stay here. But actually your poor health condition wouldn't allow you to go any further. The previous injuries made your health worse and worse. Finally, you couldn't stand up but lie on the ground in peace. You closed your eyes and embraced the infinite darkness.")
    $('#btn1').text("Replay");
    $('#second').hide(); 
}

// End state 3 will be triggered if interactors choose "Stay here" on the third day AND their health is higher than 60.
function endState3() {
    state = "Survive";
    console.log("-------End State: " + state + "-------");
    console.log("Health: " + health);
    console.log("Remaining days: " + day);
     $('#story').text("You chose to stay here because you believed the sound you heard were not real. You told yourself to calm down and relax. You closed your eyes and sat there without moving for a couple of hours. When you opened your eyes again, you saw a ship coming towards the island. Finally! You are saved!")
    $('#btn1').text("Replay");
    $('#second').hide(); 
}