//Function process
function start() {
    document.getElementById('quizForm').style.visibility='visible';
}
var correct = 0;
var wrong = 0;
function check() {
    
    // var name = document.querySelectorAll('input[id]:checked');
    // for(var i=0; i<=name.length;i++){
    //     console.log(name[i].id);
    //     if(name[i].id =='true'){
    //         console.log("correct: "+ correct++);
    //     }else if(name[i].id =='wrong'){
    //         console.log("wrong: "+ wrong++);
    //     }
    // }
   
}
var range = 0;
var keyWord = ['excellent', 'meh', 'tryNextTime'];
var message = ["Good Job", "That's just okay", "You really need to do better"];
function result() {
    document.getElementById('quizForm').style.visibility = 'hidden';
    var pic = $('<img>');
    var srcRoute= [, , ];
    if (correct < 3) {
        range = 2;
        pic.attr('src', 'images/fail.png');
        $('#game-start').prepend(pic);
    } else if (correct > 2 && correct < 6) {
        range = 1;
        pic.attr('src', 'images/meh.gif')
    } else {
        range = 0;
        pic.attr('src','images/success.gif');
    }   
    
   
    pic.attr('alt',keyWord[range]);
    var html = $('#game-start');
    html.append(`<h1>${message[range]}</h1>`);
    html.append(pic);
    html.append(`<h2>You got ${this.correct} correct.<h2>`);
}
   

//Main process
$("#game-start").on("click",function () {
    $('#game-start').empty();
    var quiz = document.getElementsByClassName('quizForm');
    start();
    $('#game-start').append(quiz);

})
//Submit Button
$('#submit').on('click',function () {
    $('#game-start').empty();
    check();
    result();
})