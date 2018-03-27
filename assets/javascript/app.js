$(document).ready(function () {

//Function process
function start() {
    document.getElementById('quizForm').style.visibility='visible';
}
//Add timer
var second = 30;
var CountDown;
var answered = false;
function run() {
    clearInterval(CountDown);
    CountDown = setInterval(decrement, 1000);
    $("#number").html('<h2>Time Remaining: '+second+ '</h2>');
    answered =true;
}
function stop() {
  clearInterval(CountDown);
  answered = false;
  second =30;
}
function decrement() {
    second--;
    $("#number").html("<h2>Time Remaining: " + second + "</h2>");
    if(second <= 0){
        stop();
        alert('Time Up!');
        check();
        result();
    }else{
        $('#submit').click(function () {
            stop();
            $("#game-start").empty();
            result();
        })
    }
}



// check the result and display the result
//--------------
var correct = 0;
function check() {
    $("#movie input").on("change", function() {
      if(($("input[name=movie]:checked", "#movie").val()) === "Toy Story"){
        correct++;
        }
    });
    $("#girl input").on("change", function() {
      if(($("input[name=girl]:checked", "#girl").val()) === "Fried Spice") {
        correct++;
      }
    });
    $("#team input").on("change", function() {
      if ($("input[name=team]:checked", "#team").val() === "Chicago Bulls") {
        correct++;
        }
    });
    $("#song input").on("change", function() {
      if ($("input[name=song]:checked", "#song").val() === "Nirvana") {
        correct++;
      }
    });
    $("#songMovie input").on("change", function() {
       if ($("input[name=songMovie]:checked", "#songMovie").val() === "The Lion King") {
         correct++;
       }
     });
    $("#cab input").on("change", function() {
        if ($("input[name=cab]:checked", "#cab").val() === "Fresh") {
          correct++;
        }
      });
    $("#friend input").on("change", function() {
        if ($("input[name=friend]:checked", "#friend").val() === "Skeeter") {
            correct++;
          }
        });
    $("#principal input").on("change", function() {
      if ($("input[name=principal]:checked", "#principal").val() === "Mr.Belding") {
        correct++;
      }
    });  
}
check();
var range = 0;
var keyWord = ['excellent', 'meh', 'tryNextTime'];
var message = ["Good Job", "That's just okay", "You really need to do better"];
function result() {
    document.getElementById('quizForm').style.visibility = 'hidden';
    var pic = $('<img>');
    var srcRoute= [, , ];
    if (correct < 3) {
        range = 2;
        pic.attr("src", "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-and-try-harder-next-time-3.png");
        $('#game-start').prepend(pic);
    } else if (correct > 2 && correct < 6) {
        range = 1;
        pic.attr("src", "https://media1.tenor.com/images/7f90edb1f23388f0684239b52f4366fb/tenor.gif?itemid=5548885");
        $("#game-start").prepend(pic);
    } else {
        range = 0;
        pic.attr("src", "https://n6-img-fp.akamaized.net/free-vector/card-template-with-fireworks-and-party-horns_1308-3021.jpg?size=338&ext=jpg");
        $("#game-start").prepend(pic);
    }   
    
    pic.attr('alt',keyWord[range]);
    var html = $('#game-start');
    html.append(`<h1>${message[range]}</h1>`);
    html.append(pic);
    html.append(`<h2>You got ${correct} correct.<h2>`);
    html.append(`<button id='startOver' type="button">Restart</button>`)
    $("#startOver").on("click", function() {
      run();
    //   $('input[name]:checked') = false;
    });
}

   
//Main process
$("#game-start").on("click",function () {
    $('#game-start').empty();
    var quiz = document.getElementsByClassName('quizForm');
    start();
    run();
    $('#game-start').append(quiz);

})
//Submit Button
$('#submit').on('click',function () {
    $('#game-start').empty();
    result();
});



})