function start() {
    document.getElementById('quiz').style.visibility='visible';
}
function check() {
    var question1 = document.quiz.movie.value;
    var question2 = document.quiz.girl.value;
    var question3 = document.quiz.team.value;
    var question4 = document.quiz.song.value;
    var question5 = document.quiz.songMovie.value;
    var question6 = document.quiz.cab.value;
    var question7 = document.quiz.friend.value;
    var question8 = document.quiz.principle.value;
    var correct = 0;
    
    if(question1 ==='Toy Story'){
        correct++;
    }
    if(question2 ==='Fried Spicy'){
        correct++;
    }
    if(question3 ==='Chicago Bulls') {
        correct++;
    }
    if (question4 === "Nirvana") {
        correct++;
    }
    if (question5 === "The Lion King"){
        correct++;
    }
    if (question6 === "Fresh") {
        correct++;
    }
    if (question7 === "Skeeter") {
      correct++;
    }
    if (question8 === "Mr.Belding") {
      correct++;
    }
     var message = ["Good Job", "That's just okay", "You really need to do better"];

    var range;
    if(correct<3){
        range =2;
    }else if(correct>2 && correct<6){
        range =1;
    }else{
        range =0;
    }
    var html = '<p>'+message[range] +'</p>'+
    '<h1>You got'+correct+'correct.'
    document.querySelector('#quiz-game').innerHTML = html;
    document.getElementById('#quiz').style.visibility = 'hidden';
}